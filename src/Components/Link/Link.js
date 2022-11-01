import React from 'react';
import './Link.css'

export default function () {
  return (
    <div>
        <div className='main-btn'>
            <a href='https://twitter.com/divineInyang1' className='link-button'>Twitter Link</a><br/><br/><br/>
            <a href='http://books.zuri.team' id='btn_zuri'>Zuri Team</a><br/><br/><br/>
            <a href='' id='books' title='This is where you will find books about design and coding'>Zuri Books</a><br/><br/><br/>
            <a href='https://books.zuri.team' id='book_python' title="Have issues under standing python? Let's help you get it by tail">Python Books</a><br/><br/><br/>
            <a href='https://background.zuri.team' id='pitch' title='When hiring a coder for a job you need to know who it is exactly you are hiring. Do a background check here.'>Background Check for Coders</a><br/><br/><br/>
            <a href='https://books.zuri.team/design-rules' id='book_design' title="It's one thing to design and another to make appealing designs. check out for this rule book.">Design Book</a>
        </div>
    </div>
  )
}
