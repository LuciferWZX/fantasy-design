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
import React,{FC} from "react";
import {ConfigProvider,Button} from "@fantasy-design/components";

const App: FC=() => {
    
    return (
        <ConfigProvider config={{
            size:'small',
            disabled:true
        }}>
            <Button size={'large'}>config button</Button>
        </ConfigProvider>
    )
}
export default App
```