
# 按钮 <Badge>开发中</Badge>

按钮用于开始一个即时操作。

<Alert type="info">
  目前还在开发中
</Alert>

```tsx
/**
 *  defaultShowCode: true
 *
 */
import React, {FC} from "react";
import {Space} from 'antd';
import 'antd/dist/antd.css';
import {Button,ConfigProvider} from "@fantasy-design/components";


const App: FC = () => {
    return (
        <Space direction="vertical">
            <div>
                <ConfigProvider config={{
                    //prefixCls:'xxa'
                }} >
                    <Button loading={true}>
                        danger primary
                    </Button>
                </ConfigProvider>
            </div>
            <div>
                <Button block>
                    block button
                </Button>
            </div>
            <Space>
                <Button type={"primary"} shape={'round'}>
                    danger primary
                </Button>
                <Button type={'primary'} ghost>
                    ghost
                </Button>
                <Button type={"default"} shape={'circle'}>
                    dx
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
            </Space>
            <Space>
                <Button type={'text'}>
                    text
                </Button>
                <Button danger type={'text'}>
                    danger text
                </Button>
                <Button type={'text'} disabled>
                    disabled text
                </Button>
            </Space>
            <Space>
                <Button type={'link'} href={"www.baidu.com"}>
                    link
                </Button>
                <Button type={'link'} danger>
                    danger link
                </Button>
                <Button type={'link'} disabled href={"www.baidu.com"}>
                    disabled link
                </Button>
            </Space>
        </Space>

    )
}
export default App
```
## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |  |
| danger | 设置危险按钮 | boolean | false |  |
| disabled | 按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | 'default' |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |
