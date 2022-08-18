## Button 按钮 <Badge>开发中</Badge>

按钮用于开始一个即时操作。

<Alert type="info">
  目前还在开发中
</Alert>

```tsx
/**
 *  defaultShowCode: true
 *  
 */
import React,{FC} from "react";
import {Space,Button as AButton} from 'antd';
import 'antd/dist/antd.css';
import {Button} from "@fantasy-design/components";


const App: FC=() => {
    return (
        <Space direction="vertical">
            <AButton type={'primary'} ghost>antd 测试按钮</AButton>
            <div>
                <Button block>
                    block button
                </Button>
            </div>
            <Space>
                <Button type={"primary"}>
                    danger primary
                </Button>
                <Button type={'primary'} ghost>
                    ghost
                </Button>
                <Button type={"default"}>
                    danger default
                </Button>
                
                <Button type={"primary"} disabled>
                    disabled primary
                </Button>
            </Space>
            
            <Space>
                <Button type={"primary"} danger>
                    danger primary
                </Button>
                <Button type={"default"} danger>
                    danger default
                </Button>
                <Button danger disabled>
                    disabled danger
                </Button>
            </Space>
            <Space>
                <Button type={'dashed'}>
                    dashed button
                </Button>
                <Button type={'dashed'} danger>
                    dashed danger button
                </Button>
                
                <Button type={'link'}>
                    link
                </Button>
                <Button type={'text'}>
                    text
                </Button>
            </Space>
        </Space>
        
    )
}
export default App
```
<API src="@fantasy-design/components/Button"></API>