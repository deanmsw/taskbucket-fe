import React from 'react';
import styles from './taskList.module.css'; // Import CSS module
import TaskCard from '../TaskCard';

function TaskList({ tasks }: any) {
  return (
    <div className={styles.container}>
      {tasks?.data?.map((task: any, i: any) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
