interface props {
  heroesPage: number;
  totalHeroes: number;
  paginate: (item: number) => void;
}

export default function Pagination({ heroesPage, totalHeroes, paginate }: props) {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalHeroes / heroesPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <ul>
      {0 < pageNumbers.length ? (
        pageNumbers.map((item) => (
          <li onClick={() => paginate(item)} key={item}>
            {item}
          </li>
        ))
      ) : (
        <li>1</li>
      )}
    </ul>
  );
}
