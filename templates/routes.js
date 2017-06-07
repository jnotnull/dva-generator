import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';

import styles from './{{=it.id}}.less';

const {{=it.name}} = (props) => {

  return (
    <div id="{{=it.id}}" className={styles.{{=it.id}}}>
        
    </div>
  );
}

export default connect(
({ {{=it.id}} }) => ({

})
)({{=it.name}});
