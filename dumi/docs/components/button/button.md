## button <Badge>Hello</Badge>
<Alert type="info">
  注意，内部暂时只能编写 HTML
</Alert>

```tsx

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