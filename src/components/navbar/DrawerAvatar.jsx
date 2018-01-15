import React from 'react';

import ActionFace from 'material-ui/svg-icons/action/face';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

/**
 * DrawerAvatar() renders a material UI Avatar profile
 * 
 * @param {object} props - props.profilePicture is a URL of the profile picture
 * @returns - A rendered Avatar component
 */
export default function DrawerAvatar(props) {
    if (props.profilePicture) {
        return (
            <ListItem 
                leftAvatar={ 
                    <Avatar 
                        src={props.profilePicture} 
                    />
                } 
            >
                Hello, {props.user}!
            </ListItem>
        )
    } else {
        return (
            <ListItem 
                leftAvatar={ 
                    <Avatar 
                        icon={
                            <ActionFace />
                        } 
                    /> 
                } 
            >
                Hello, {props.user}!
            </ListItem>
        )
    }
}