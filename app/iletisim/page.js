'use client';

import SaveApplication from '@/actions';
import { useFormState } from 'react-dom';

const initalState = {
  errors: {
    nameError: '',
    lastnameError: '',
  },
};

export default function Contact() {
  const [state, formAction] = useFormState(SaveApplication, initalState);

  return (
    <div>
      <form action={formAction}>
        {state?.errors?.nameError ? <span>Name yaz</span> : ''}
        <input placeholder='isim gir' name='name' />
        {state?.errors?.lastnameError ? <span>LastName yaz</span> : ''}
        <input placeholder='soyadı gir' name='lastname' />
        <button>Gönder</button>
      </form>
    </div>
  );
}
