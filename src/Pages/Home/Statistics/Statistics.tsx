import React from 'react';

const Statistics = () => {
    return (
        <div className="flex justify-between xl:px-16 text-center py-7">
            <div className="w-1/4">
                <h3 className="text-5xl font-bold">2136+</h3>
                <p className="text-xl font-medium">Students</p>
            </div>
            <div className="w-1/4">
                <h3 className="text-5xl font-bold">75+</h3>
                <p className="text-xl font-medium">Courses</p>
            </div>
            <div className="w-1/4">
                <h3 className="text-5xl font-bold">45+</h3>
                <p className="text-xl font-medium">Instructors</p>
            </div>
            <div className="w-1/4">
                <h3 className="text-5xl font-bold">2000+</h3>
                <p className="text-xl font-medium">Study Materials</p>
            </div>
        </div>
    );
};

export default Statistics;