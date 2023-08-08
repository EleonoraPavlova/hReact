import { useState } from 'react';
import style from './HW4.module.css';
import { Button } from './Button';
import { Input } from './Input';

export const HW4 = () => {
  const [currentText, setCurrentText] = useState('');
  console.log(currentText)
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);
  console.log(texts)

  const handleSave = () => {
    setTexts([currentText, ...texts]);
    setCurrentText('');
  };

  function mappedList() {
    return texts.map((el, index) => {
      return (
        <li key={index} id={`hw04-task-${index}`} className={index % 2 === 0 ? style.chetNechet : ''}>
          {el}</li >)
    })
  }
  return (
    <div id={'hw04'}>
      {currentText ? (
        <h1 id={'hw04-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw04-default-text'}>Здесь появится новое дело</h1>
      )}

      <Input currentText={currentText} setCurrentText={setCurrentText} />

      <Button callBack={handleSave} name="Save" />

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>
      <ol id={'hw04-tasks'}>{mappedList()}</ol>
    </div >
  )
};

