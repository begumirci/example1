'use server';
import { redirect } from 'next/navigation';

export default async function SaveApplication(prevState, formData) {
  console.log(formData);
  const name = formData.get('name');
  const lastName = formData.get('lastname');

  if (!name) {
    return {
      errors: {
        nameError: 'Name Yazmalısın',
      },
    };
  }
  if (!lastName) {
    return {
      errors: {
        lastnameError: 'lastname Yazmalısın',
      },
    };
  }

  console.log('merhaba');
}

export async function Navigation(formData) {
  const product = formData.get('productName');

  redirect(`/urunler?search=${product}`);
}
