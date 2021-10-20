import React, { useState } from "react";
import { FormControl, FormHelperText, Input, InputLabel, TextField, MenuItem, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "@firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";


export const NewProductMui = () => {
  const dispatch = useDispatch()
  const defaultValues = {
    title: "",
    desc: "",
    price: "",
    categories: null,
    inStock: 'true',
    img: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  };
  const [file, setFile] = useState(null)
  const [cat, setCat] = useState([]);
  const handleCat = (e) => {
    setCat(e.target.value.split(','))
  }

  const [formValues, setFormValues] = useState(defaultValues)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const fileName = new Date().getTime() + file.name
      const storage = getStorage(app)
      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = { ...formValues, img: downloadURL, categories: cat }
            addProduct(product, dispatch)
          });
        }
      )
    } else {
      const product = { ...formValues, categories: cat }
      addProduct(product, dispatch)
    }
  }

  return (
    <>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTextField-root,.MuiButton-root': { m: 1, width: '55ch' },
        }}
        autoComplete="off"
      >
        <Button
          variant="outlined"
          component="label"
        >
          Choose Image
          <input
            onChange={e => setFile(e.target.files[0])}
            name='img'
            type="file"
            hidden
          />
        </Button>
        <TextField
          required
          id="title"
          label="Title"
          variant="outlined"
          name="title"
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="desc"
          label="Description"
          variant="outlined"
          name="desc"
          type="text"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="price"
          label="Price"
          variant="outlined"
          name="price"
          type="number"
          onChange={handleInputChange}
        />
        <TextField
          id="categories"
          label="Categories"
          variant="outlined"
          name="categories"
          type="text"
          placeholder='jeans,skirts'
          onChange={handleCat}
        />
        <TextField
          id="inStock"
          select
          label="In Stock"
          name='inStock'
          value={formValues.inStock}
          helperText="Please select in stock or not"
          onChange={handleInputChange}
        >
          <MenuItem value='true'>
            Yes
          </MenuItem>
          <MenuItem value='false'>
            No
          </MenuItem>
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </>
  )
}