import { gql } from '@apollo/client'
const GET_EMPLOYEE_PROFILE = gql`
query getEmployeeProfile($id_badge:String!){
  v_employee_profiles(where:{
    id_badge:$id_badge
  }){
    id 
    id_badge 
    id_role
    location 
    plant 
    name 
    role 
    plant
    hash_password
  }
}
`
export default {
  GET_EMPLOYEE_PROFILE
}