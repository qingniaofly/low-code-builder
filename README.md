# low-code-builder

#### 介绍
低代码生成器，支持vue和react



#### 安装教程

`npm run @dever/low-code-builder`

#### 使用说明

1.  React

```js
import React from 'react'
import Builder from '@dever/low-code-builder'
import ReactModel from '@dever/low-code-builder/dist/react'

const config = {
    id: 'Wrapper',
    componentType: 'Wrapper',
    props: {},
    children: [
        {
            id: 'header',
            componentType: 'header',
            children: [
                {
                    id: 'header1',
                    componentType: 'header',
                    children: [
                        {
                            id: 'header2',
                            componentType: 'header',
                            children: [
                                {
                                    id: 'Component',
                                    componentType: 'Component',
                                    component: '123',
                                },
                                {
                                    id: 'Component1',
                                    componentType: 'Component',
                                    component: (props) => {
                                        console.log('fdd:', props)
                                        return <div>fdd</div>
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'content',
            componentType: 'content',
        },
        {
            id: 'footer',
            componentType: 'footer',
        },
        {
            id: 'hello',
            componentType: 'hello',
        },
    ],
}
const reactBuilder = new Builder(ReactModel, config)

// 注册组件
reactBuilder.registerComponent({
    Hello: function (props) {
        const { state } = props
        return <div>Hello world{ state?.value}</div>
    }
})
reactBuilder.setComponents({
    Footer: function (props) {
        return <div>footer</div>
    }
})

function LowCodeBuilder() {
    return <div className="low-code-builder">{reactBuilder.render()}</div>
}


```

2.  Vue

```vue

<template>
    <div>
        <Builder />
    </div>
</template>
<script lang="jsx">
import { withHooks, useState } from 'vue-hooks'
import Builder from '@dever/low-code-builder'
import VueModel from '@dever/low-code-builder/dist/vue'

const config = {
    id: 'Wrapper',
    componentType: 'Wrapper',
    props: {},
    children: [
        {
            id: 'header',
            componentType: 'header',
            children: [
                {
                    id: 'header1',
                    componentType: 'header',
                    children: [
                        {
                            id: 'header2',
                            componentType: 'header',
                            children: [
                                {
                                    id: 'Component',
                                    componentType: 'Component',
                                    component: '123',
                                },
                                {
                                    id: 'Component1',
                                    componentType: 'Component',
                                    component: function (h, props) {
                                        console.log('fdd:', props)
                                        return <div>fdd</div>
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'content',
            componentType: 'content',
        },
        {
            id: 'footer',
            componentType: 'footer',
        },
        {
            id: 'hello',
            componentType: 'hello',
        },
    ],
}
const vueBuilder = new Builder(VueModel, config)

// 注册组件
vueBuilder.registerComponent({
    Hello: Demo,
})
vueBuilder.setComponents({
    Footer: withHooks(function (h, props) {
        return <div>footer</div>
    }),
})
const Builders = vueBuilder.render()
const Builder = Builders.length > 0 ? Builders[0] : null
export default {
    components: {
        Builder,
    }
}
</script>

```


