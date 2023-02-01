import React from 'react';
import CatVideo1 from '../components/CatVideo';
import '../styles/Contact.css';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e) => {
    console.log('[ X ]');
    const isValid = await trigger();
    console.log('[ Y ]');
    if (!isValid) {
      console.log('[ Z ]');
      e.preventDefault();
    }
    console.log('[ G ]');
  };

  return (
    <div className='contact'>
      <div className='leftSide'>
        <CatVideo1 />
      </div>
      <div className='rightSide'>
        <h1>Contact Us</h1>

        <form
          target='_blank'
          onSubmit={onSubmit}
          action='https://formsubmit.co/22ea634814a065da5f295a6bfd3f708a'
          method='POST'
        >
          <label htmlFor='name'>Full Name</label>
          <input
            name='name'
            placeholder='Enter full name...'
            type='text'
            {...register('name', {
              required: true,
              maxLength: 100
            })}
          ></input>
          {errors.name && (
            <p>
              {errors.name.type === 'required' && 'This field is required.'}
              {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
            </p>
          )}

          <label htmlFor='email'>Email</label>
          <input
            name='email'
            placeholder='Enter email...'
            type='email'
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
          ></input>
          {errors.email && (
            <p>
              {errors.email.type === 'required' && 'This field is required.'}
              {errors.email.type === 'maxLength' && 'Max length is 100 char.'}
            </p>
          )}

          <label htmlFor='message'>Message</label>
          <textarea
            placeholder='Enter message...'
            name='message'
            rows={4}
            cols={50}
            {...register('message', {
              required: true,
              maxLength: 2000
            })}
          />
          {errors.message && (
            <p>
              {errors.message.type === 'required' && 'This field is required.'}
              {errors.message.type === 'maxLength' &&
                'Max length is 2000 char.'}
            </p>
          )}
          <button type='submit'>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
