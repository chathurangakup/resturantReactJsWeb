import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const TableComp1=styled.table`
  border-collapse: collapse; /* Collapse borders */
  width: 100%; /* Full-width */
  border: 1px solid ; /* Add a grey border */
  font-size: 14px; 
  color: #000;
`

export const TableTr1=styled.tr`
  border-bottom: 1px solid ;
  :nth-child(even) {
  background-color:transparent
}
  /* &:hover{
    background-color: #f1f1f1;
  } */
`

export const TableTd1=styled.td`
  text-align: left; /* Left-align text */
  padding: 12px; 
`

// export const TableTdIcons=styled.td`
//   text-align: left; /* Left-align text */
//   padding-left:30px;
 
// `

// export const TableTh=styled.th`
//    text-align: left; /* Left-align text */
//   padding: 12px; 

// `

// export const NavBtnLink=styled(Link)`
//     border-radius:4px;
//     background:none;
//     padding:10px 22px;
//     color:red;
//     border:none;
//     outline:none;
//     cursor: pointer;
//     transition:all 0.2s ease-in-out;
//     text-decoration:none;

//     &:hover{
//         transition:all 0.2s ease-in-out;
//         background:#fff;
//         color:#000;
//     }
// `