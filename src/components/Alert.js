import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '60px'}}>
      {props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
      </div>}
    </div>
  ) 
}
