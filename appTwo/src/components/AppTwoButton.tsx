import React from "react";
import { Button } from 'antd';
import { myConfirm } from '../tools/msg'

export default function AppTwoButton() {
    return <Button onClick={myConfirm}>
        我是appTwo的按钮组件
    </Button>
}