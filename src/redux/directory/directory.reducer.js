const INITIAL_STATE = {
  sections: [{
    title: 'shirts',
    imageUrl: 'https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    id: 1,
    linkUrl: 'shop/shirts'
  },
  {
    title: 'stickers',
    imageUrl: 'https://images.unsplash.com/photo-1517518827152-e161035cce5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2988&q=80',
    id: 2,
    linkUrl: 'shop/stickers'
  },
  {
    title: 'candles',
    imageUrl: 'https://images.unsplash.com/photo-1570823635306-250abb06d4b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    id: 3,
    linkUrl: 'shop/candles'
  },
  
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer