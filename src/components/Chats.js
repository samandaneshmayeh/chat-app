import React from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

// Components
import Navbar from './Navbar';

// Styles
import styles from "./Chats.module.css"

const Chats = () => {

    const history = useHistory();

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/");
    }

    return (
        <div className={styles.container}>
            <Navbar LogoutHandler={logoutHandler} />

            <ChatEngine 
                height="calc(100vh - 50px)"
                projectID="ec780027-f78b-4255-9820-f4ad29554589"
                userName="."
                userSecret="."
            />
        </div>
    );
};

export default Chats;