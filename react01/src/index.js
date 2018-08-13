import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './CommentComponent/Comment';
import CommentButton from './CommentButton/CommentButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App name="x">abc</App></div>, document.getElementById('root'));

ReactDOM.render(<div>
<Comment/>
<CommentButton/>
</div>
,document.getElementById('root'));
registerServiceWorker();
