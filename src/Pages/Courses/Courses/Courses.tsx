import React, { useContext } from 'react';
import { AuthContext, AuthContextType } from '../../../contexts/AuthProvider';

const Courses = () => {

    const { user } = useContext(AuthContext) as AuthContextType;

    return (
        <div className="mt-[100px]">
            <h1>This is courses page.</h1>
            <h2>{user?.email}</h2>
            <h2>{user?.uid}</h2>
        </div>
    );
};

export default Courses;