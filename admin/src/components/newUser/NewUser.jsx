import { FormInput, FormItem, FormLabel, NewUserButton, NewUserForm, NewUserGender, NewUserSelect, NewUserTitle } from "./NewUserElements"

export const NewUser = () => {
  return (
    <>
      <NewUserTitle>New User</NewUserTitle>
      <NewUserForm>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormInput type='text' placeholder=''></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Full name</FormLabel>
          <FormInput type='text' placeholder=''></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>E-mail</FormLabel>
          <FormInput type='email' placeholder=''></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormInput type='password' placeholder=''></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Phone</FormLabel>
          <FormInput type='phone' placeholder=''></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormInput type='password' placeholder=''></FormInput>
        </FormItem>
        <FormItem>
          <FormLabel>Gender</FormLabel>
          <NewUserGender>
            <input type='radio' name='gender' id='male' value='male' />
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' />
            <label htmlFor='female'>Female</label>
          </NewUserGender>
        </FormItem>
        <FormItem>
          <FormLabel>Active</FormLabel>
          <NewUserSelect name='active' id='active'>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </NewUserSelect>
        </FormItem>
        <FormItem>
          <NewUserButton>Create</NewUserButton>
        </FormItem>
      </NewUserForm>
    </>
  )
}