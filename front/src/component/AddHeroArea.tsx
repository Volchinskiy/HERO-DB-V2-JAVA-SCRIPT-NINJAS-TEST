import React from 'react';
import { useDispatch } from 'react-redux';

import { addHero, addHeroWithImg } from './../redux/action/heroAction';
import { createHeroI } from './../type/heroType';

export default function AddHeroArea() {
  const dispatch = useDispatch();
  const [superpowers, setSuperpowers] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [nickname, setNickname] = React.useState<string>('');
  const [realName, setRealName] = React.useState<string>('');
  const [phrase, setPhrase] = React.useState<string>('');
  const [img, setImg] = React.useState<null | Blob>(null);

  const descriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);
  const superpowersHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setSuperpowers(e.target.value);
  const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);
  const realNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => setRealName(e.target.value);
  const phraseHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPhrase(e.target.value);
  const imgHandler = (e: any) => setImg(e.target.files[0]);

  const onSubmit = () => {
    const newHero: createHeroI = {
      nickname: nickname,
      real_name: realName,
      origin_description: description,
      superpowers: superpowers,
      catch_phrase: phrase,
    };

    if (img) {
      const formDate = new FormData();
      formDate.append('img', img);

      for (const key in newHero) {
        formDate.append(`${key}`, (newHero as any)[key]);
      }

      dispatch(addHeroWithImg(formDate));
      return;
    }

    dispatch(addHero(newHero));
  };

  return (
    <div className="addHeroArea">
      <label>Nickname</label>
      <input value={nickname} onChange={nicknameHandler} />

      <label>Real Name</label>
      <input value={realName} onChange={realNameHandler} />

      <label>Origin Description</label>
      <textarea value={description} onChange={descriptionHandler} />

      <label>Superpowers</label>
      <textarea value={superpowers} onChange={superpowersHandler} />

      <label>Catch Phrase</label>
      <textarea value={phrase} onChange={phraseHandler} />

      <label>Img</label>
      <input type="file" onChange={imgHandler} accept=".jpg" />

      <button onClick={onSubmit}>Add Hero</button>
    </div>
  );
}
