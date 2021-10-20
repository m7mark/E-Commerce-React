import { useState } from "react";
import { useDispatch } from "react-redux";
import { FormInput, FormItem, FormLabel, NewProductButton, NewProductForm, NewProductSelect, NewProductTitle } from "./NewProductElements"
// import TextField from '@mui/material/TextField';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import app from '../../firebase'
import { addProduct } from "../../redux/apiCalls";

export const NewProduct = () => {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })

  }
  const handleCat = (e) => {
    setCat(e.target.value.split(','))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
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
          const product = { ...inputs, img: downloadURL, categories: cat }
          addProduct(product, dispatch)
        });
      }
    );
  }

  return (
    <>
      <NewProductTitle>New Product</NewProductTitle>
      <NewProductForm>
        <FormItem>
          <FormLabel>Image</FormLabel>
          <FormInput name='img' type='file' onChange={e => setFile(e.target.files[0])}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormInput name='title' type='text' placeholder='Product name' onChange={handleChange}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormInput name='desc' type='text' placeholder='description' onChange={handleChange}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Price</FormLabel>
          <FormInput name='price' type='number' placeholder='100' onChange={handleChange}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Categories</FormLabel>
          <FormInput name='categories' type='text' placeholder='jeans,skirts' onChange={handleCat}></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Stock</FormLabel>
          <NewProductSelect name='inStock' id='inStock' onChange={handleChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </NewProductSelect>
        </FormItem>
        <FormItem>
          <NewProductButton type="submit" onClick={handleSubmit}>Create</NewProductButton>
        </FormItem>
      </NewProductForm>
    </>
  )
}