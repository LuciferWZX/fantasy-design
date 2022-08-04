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
import {Button} from "@fantasy-design/components";

const App: FC=() => {
    return (
        <div>
            
            <Button disabled={true}  />
        </div>
        
    )
}
export default App
```