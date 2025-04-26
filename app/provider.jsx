'use client';

import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '@/services/supabaseClient';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    CreateNewUser();
  }, []);

  const CreateNewUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error || !user) {
      console.error('Auth error or no user:', error);
      return;
    }

    let { data: Users, error: fetchError } = await supabase
      .from('Users')
      .select("*")
      .eq('email', user.email);

    if (!Users || Users.length === 0) {
      const { data: newUser, error: insertError } = await supabase
        .from("Users")
        .insert([
          {
            name: user.user_metadata?.name,
            email: user.email,
            picture: user.user_metadata?.picture,
          }
        ])
        .select();

      if (insertError) {
        console.error('Insert Error:', insertError);
      } else {
        setUser(newUser[0]);
        return;
      }
    } else {
      setUser(Users[0]);
    }
  };

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;

export const useUser = () => useContext(UserDetailContext);
