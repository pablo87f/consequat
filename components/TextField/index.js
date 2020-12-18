import React, { useState } from 'react';
import {  TextField as MuiTextField } from '@material-ui/core';

export const TextField = (props) =>(
  <MuiTextField variant='outlined' style={{width: '100%'}} {...props} ></MuiTextField>
)
