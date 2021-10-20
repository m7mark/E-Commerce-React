
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';

import { ProductListContainer, ProductListDelete, ProductListEdit, ProductListImg, ProductListItems } from './ProductListElements';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProduct } from '../../redux/apiCalls';

export const ProductList = () => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }

  const products = useSelector(state => state.product.products);

  useEffect(() => {
    getProduct(dispatch)
  }, [dispatch]);

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <ProductListItems>
            <ProductListImg src={params.row.img} alt='' />
            {params.row.title}
          </ProductListItems>
        )
      }
    },
    { field: 'inStock', headerName: 'Stock', width: 140 },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (<>
          <Link to={'product/' + params.row._id}>
            <ProductListEdit>Edit</ProductListEdit>
          </Link>
          <ProductListDelete onClick={() => handleDelete(params.row._id)} />
        </>
        )
      }
    },
  ];

  return (
    <ProductListContainer>
      <DataGrid
        getRowId={(row) => row._id}
        rows={products}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </ProductListContainer>
  );
}