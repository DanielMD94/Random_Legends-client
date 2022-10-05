import { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProviderWrapper = (props) => {
    const [showMessage, setShowMessage] = useState({
        show: false,
        title: 'message',
        message: 'text of message'
    })


    return (
        <MessageContext.Provider
            value={{ showMessage, setShowMessage }}>
            {props.children}
        </MessageContext.Provider>
    )

}