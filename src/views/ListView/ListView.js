import React from 'react';
import ListWrapper from '../../components/ListsWrapper/ListWrapper'


const ListView = (props) => {

  return (
    <div className="shell">
      <ListWrapper {...props} />
    </div>
  )

}

export default ListView;
