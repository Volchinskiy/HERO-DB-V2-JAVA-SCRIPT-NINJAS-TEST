import React from 'react';
import { useDispatch } from 'react-redux';

import { heroI } from './../type/heroType';
import { updateHero, deleteHero, deleteImg, addImg } from './../redux/action/heroAction';

export default function HeroItem(hero: heroI) {
  const dispatch = useDispatch();
  const [showMore, setShowMore] = React.useState<boolean>(false);
  const [update, setUpdate] = React.useState<boolean>(false);

  const [nickname, setNickname] = React.useState<string>('');
  const [realName, setRealName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [superpowers, setSuperpowers] = React.useState<string>('');
  const [phrase, setPhrase] = React.useState<string>('');

  React.useEffect(() => {
    setNickname(hero.nickname);
    setRealName(hero.real_name);
    setDescription(hero.origin_description);
    setSuperpowers(hero.superpowers);
    setPhrase(hero.catch_phrase);
  }, [update, hero]);

  const nicknameHandler = (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value);
  const realNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => setRealName(e.target.value);
  const descriptionHandler = (e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);
  const superpowersHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSuperpowers(e.target.value);
  const phraseHandler = (e: React.ChangeEvent<HTMLInputElement>) => setPhrase(e.target.value);

  const onShowMore = () => setShowMore(!showMore);
  const onUpdate = () => setUpdate(!update);
  const onDelete = () => (confirm('Delete this Hero?') ? dispatch(deleteHero(hero.id)) : null);
  const onSubmit = () => {
    const newHeroData = {
      id: hero.id,
      nickname: nickname,
      real_name: realName,
      origin_description: description,
      superpowers: superpowers,
      catch_phrase: phrase,
    };
    dispatch(updateHero(newHeroData));
    setUpdate(false);
  };
  const onDeleteImg = () => dispatch(deleteImg(hero.img_id));
  const onAddImg = (e: any) => {
    const formDate = new FormData();
    formDate.append('img', e.target.files[0]);

    dispatch(addImg(hero.id, formDate));
  };

  if (update) {
    return (
      <div className="hero-container_item-open">
        <div className="hero-container_item-open_description">
          <input value={nickname} onChange={nicknameHandler} />
          <input value={realName} onChange={realNameHandler} />
          <input value={description} onChange={descriptionHandler} />
          <input value={superpowers} onChange={superpowersHandler} />
          <input value={phrase} onChange={phraseHandler} />
          <input type="file" />
        </div>

        <div className="hero-container_item-open_img-wrapper">
          {hero.img_name ? (
            <>
              <img src={`http://localhost:5000/hero/img/${hero.img_name}`} alt="error" />
              <button onClick={onDeleteImg} className="hero-container_item-open_delete-img">
                Delete Img
              </button>
            </>
          ) : (
            <input type="file" onChange={onAddImg} />
          )}
        </div>

        <div className="hero-container_item-open_button-wrapper">
          <button onClick={onUpdate}>Back</button>
          <button onClick={onSubmit}>Update</button>
        </div>
      </div>
    );
  }

  if (showMore) {
    return (
      <div className="hero-container_item-open">
        <div className="hero-container_item-open_description">
          <div>Nickname: {nickname}</div>
          <div>Real Mame: {realName}</div>
          <div>Origin Description: {description}</div>
          <div>Superpowers: {superpowers}</div>
          <div>Catch Phrase: {phrase}</div>
        </div>

        <div className="hero-container_item-open_img-wrapper">
          {hero.img_name ? <img src={`http://localhost:5000/hero/img/${hero.img_name}`} alt="error" /> : null}
        </div>

        <div className="hero-container_item-open_button-wrapper">
          <button onClick={onShowMore}>Close</button>
          <button onClick={onUpdate}>Update</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-container_item">
      <div className="hero-container_item-name">{nickname}</div>
      <div>
        <button onClick={onShowMore}>More</button>
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
