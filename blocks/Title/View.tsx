import styles from './Title.module.css'

import type { Props } from '../types'

const parseDefaultValue = (values: string) => {
    try {
        return JSON.parse(values)
    } catch (e) {
        return {}
    }
}

const View = ({ defaultValues, theme }: Props) => {
    // const { primary, secondary, background } = theme
    const { title } = parseDefaultValue(defaultValues)

    return (
        <section className={styles.title}>
            <h1>{title}</h1>
        </section>
    )
}

export default View
