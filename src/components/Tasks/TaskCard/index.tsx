import React from 'react';
import styles from './taskCard.module.css'; // Import CSS module

const TaskCard = ({ task }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src="/dummyproduct.png" alt="Caffe Latte" />

      <div className={styles.content}>
        <div className={styles.body}>
          <h2 className={styles.title}>{task?.title}</h2>
          <p className={styles.description}>{task?.description}</p>
          <h3 className={styles.dueDate}>{task?.due_date}</h3>
        </div>

        <div className={styles.footer}>
          <a href={`/tasks/${task.id}`}>
            <button className={styles.button}>View Task</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
