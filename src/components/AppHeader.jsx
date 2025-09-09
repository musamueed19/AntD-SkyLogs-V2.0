import { Switch } from 'antd';
import React from 'react'

const AppHeader = ({setTheme}) => {
  return (
    <div>
      <Switch
        checkedChildren="Dark"
        unCheckedChildren="Light"
        onChange={(cheked) => {
          if (cheked) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
    </div>
  );
}

export default AppHeader