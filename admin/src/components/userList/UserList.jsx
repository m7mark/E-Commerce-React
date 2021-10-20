
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';

import {
  UserListContainer,
  UserListDelete,
  UserListEdit,
  UserListImg,
  UserListUser,
} from './UserListElements';
import { userRows } from '../../dummyData';

export const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <UserListUser>
            <UserListImg src={params.row.avatar} alt='' />
            {params.row.userName}
          </UserListUser>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction value',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (<>
          <Link to={'user/' + params.row.id}>
            <UserListEdit>Edit</UserListEdit>
          </Link>
          <UserListDelete onClick={() => handleDelete(params.row.id)} />
        </>
        )
      }
    },
  ];

  return (
    <UserListContainer>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </UserListContainer>
  );
}