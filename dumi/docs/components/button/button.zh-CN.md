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
            <Button type={'primary'} >
                primary
            </Button>
            <Button type={'primary'} disabled>
                primary disabled 
            </Button>
            <Button type={'dashed'}>
                dashed
            </Button>
            <Button type={'dashed'}>
                dashed1
            </Button>
            <Button type={'link'}>
                link
            </Button>
            <Button type={'text'}>
                text
            </Button>
        </div>
        
    )
}
export default App
```
<API src="@fantasy-design/components/Button"></API>