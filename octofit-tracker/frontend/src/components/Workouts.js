import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://sturdy-space-cod-g97rw6vx7qh9qg-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Workouts</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout.id}>
                <td>{workout.id}</td>
                <td>{workout.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Workouts;
