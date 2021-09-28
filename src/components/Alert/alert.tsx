import React , { FC, useState } from 'react'
import classNames from 'classnames'
import Transition from '../Transition/transition'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    onClose?: () => void;
    /* 是否显示关闭图标 */
    closable?: boolean;
}

export const Alert: FC<AlertProps> = (props) => {
    const [ hide, setHide ] = useState(false)
    const {
        title,
        description,
        type,
        onClose,
        closable
    } = props

    const classes = classNames('gil-alert', {
        [`gil-alert-${type}`]: type,
    })

    const titleClass = classNames('gil-alert-title', {
        'bold-title': description
    })

    const handleClose = (e: React.MouseEvent) => {
        if (onClose) {
            onClose()
        }
        setHide(true)
    }

    return (
        <Transition
            in={!hide}
            timeout={300}
            animation="zoom-in-top"
        >
            <div className={classes}>
                <span className={titleClass}>
                    {title}
                </span>
                {description && <p className="gil-alert-desc">{description}</p>}
                {closable && <span className="gil-alert-close" onClick={handleClose}></span>}
            </div>
        </Transition>
    )
}

Alert.defaultProps = {
    type: 'default',
    closable: true,
}
export default Alert;