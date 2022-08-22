## ConfigProvider 全局化配置 <Badge>开发中</Badge>

为组件提供统一的全局化配置。

<Alert type="info">
  目前还在开发中
</Alert>

```tsx
/**
 *  defaultShowCode: true
 *
 */
import React, {FC, useState} from "react";
import {ConfigProvider, Button, SizeType} from "@fantasy-design/components";
import {Space,Switch} from "antd";

const App: FC = () => {
    const [size, setSize] = useState<SizeType>(undefined)
    const [disabled, setDisabled] = useState<boolean|undefined>(undefined)
    const changeSize=(_size:SizeType)=>{
        setSize(_size)
    }
    const changeDisabled=()=>{
        
        setDisabled(!disabled)
    }
    return (
        <Space direction="vertical">
            <Space>
                <Button type={'primary'} onClick={()=>setSize('small')}>sm</Button>
                <Button type={'primary'} onClick={()=>setSize('middle')}>middle</Button>
                <Button type={'primary'} onClick={()=>setSize('large')}>large</Button>
            </Space>
            <Space>
                <Switch checkedChildren="开启" unCheckedChildren="禁用" checked={disabled} onChange={changeDisabled}  />
            </Space>
            <ConfigProvider config={{
                size: size,
                disabled: disabled,
                prefixCls:"fantasy"
            }}>
                <Button type={'primary'}>config button</Button>
            </ConfigProvider>
            <Space>
                <ConfigProvider config={{
                
                }}>
                    <Button >prefixCls</Button>
                </ConfigProvider>
            </Space>
        </Space>
    )
}
export default App
```

## API

| 参数        | 说明                                                                                                                                                             | 类型 | 默认值       | 版本 |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------| --- |-----------| --- |
| disabled  | 设置 fantasy-desgin 组件禁用状态                                                                                                                                       | boolean | -         | |
| size      | 设置 fantasy-desgin 组件大小                                                                                                                                         | `small` \| `middle` \| `large` | - |  |
| prefixCls | 设置统一样式前缀。注意：需要配合 `less` 变量 [@fantasy-prefix](https://github.com/LuciferWZX/fantasy-design/blob/master/packages/components/src/style/themes/default.less#L4) 使用 | string | `fantasy` |  |