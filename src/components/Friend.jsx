import React from 'react';

const Friend = ({friend, pos}) => {
    let styles = "col-sm-4 p-1";
    if (pos === 7){
        styles += " corner1";
    }
    if (pos === 9){
        styles += " corner2";
    }

    return (
        <img className={styles} src={friend} alt="Friend"/>
    );
};

export default Friend;