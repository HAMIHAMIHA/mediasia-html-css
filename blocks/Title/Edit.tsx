import { useState } from 'react'
import styles from './Title.module.css'

import type { Props } from '../types'
import { Card } from 'antd'
import StyledInput from '../../components/StyledInput'
import set from 'lodash.set'

const parseDefaultValue = (values: string) => {
    try {
        return JSON.parse(values)
    } catch (e) {
        return {}
    }
}

const Edit = ({ defaultValues, onChange, theme }: Props) => {
    // const { background, primary, secondary } = theme
    const [values, setValues] = useState<any>(parseDefaultValue(defaultValues))

    const handleChange = (name: string, value: any) => {
        const newValue = { ...values }

        set(newValue, name, value)

        setValues(newValue)

        try {
            if (onChange) onChange(JSON.stringify(newValue))
        } catch (e) {
            console.log('Error on edit')
        }
    }

    return (
        <EditPanel
            view={
                <section className={styles.title}>
                    <StyledInput.h1
                        // style={{
                        //     color: primary,
                        //     textShadow: `0.025em 0.025em 0 ${background}, 0.05em 0.05em 0 ${secondary}, 0.075em 0.075em 0 ${background}, 0.1em 0.1em 0 ${secondary}`,
                        // }}
                        className={styles.title}
                        value={values.title}
                        onChange={(e) => handleChange('title', e)}
                    />
                </section>
            }
        />
    )
}

interface PanelProps {
    view: JSX.Element
    panel?: JSX.Element
}

const EditPanel = ({ view, panel }: PanelProps) => (
    <div style={{ display: 'flex' }}>
        <div style={{ flex: 5, backgroundColor: 'rgb(240, 242, 245)' }}>{view}</div>
        {!!panel && (
            <Card title="Settings Panel" style={{ flex: 1, marginTop: 1 }} bordered={false}>
                {panel}
            </Card>
        )}
    </div>
)

export default Edit
