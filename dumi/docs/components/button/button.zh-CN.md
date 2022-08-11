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
import {Button,ThemeProvider} from "@fantasy-design/components";


const App: FC=() => {
    return (
        <div>
            <ThemeProvider theme={'dark'}>
                <Button type={'primary'} >
                    primary
                </Button>
                <Button type={'default'}>
                    default
                </Button>
            </ThemeProvider>
            <ThemeProvider >
                <Button type={'dashed'}>
                    dashed
                </Button>
            </ThemeProvider>
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