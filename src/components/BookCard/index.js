import { useParams, useNavigate } from 'react-router-dom';
import ReactContext from '../ReactContext'
import { GoDotFill } from "react-icons/go";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from '../Header'
import './index.css'

const initialBooks = [
    { id: 1, img: '/mocking.jpeg', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', rating: 4.8, year: 1960, description: "The story, told by Jean Louise Finch, takes place during three years (1933–35) of the Great Depression in the fictional town of Maycomb, Alabama, the seat of Maycomb County. Nicknamed Scout, the narrator, who is six years old at the beginning of the book, lives with her older brother Jeremy, nicknamed Jem, and their widowed father Atticus, a middle-aged lawyer. They also have a black cook, Calpurnia, who has been with the family for many years and helps Atticus raise the two children." },

    { id: 2, img: '/1984.jpeg', title: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 4.7, year: 1949, description: `In an uncertain year, believed to be 1984, civilisation has been ravaged by world war, civil conflict, and revolution. Airstrip One (formerly known as Great Britain) is a province of Oceania, one of the three totalitarian super-states that rule the world. It is ruled by "The Party" under the ideology of "Ingsoc" (a Newspeak shortening of "English Socialism") and the mysterious leader Big Brother, who has an intense cult of personality. The Party brutally purges out anyone who does not fully conform to their regime, using the Thought Police and constant surveillance through telescreens (two-way televisions), cameras, and hidden microphones. Those who fall out of favour with the Party become "unpersons", disappearing with all evidence of their existence destroyed.` },

    { id: 3, img: '/gatsby.jpeg', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', rating: 4.5, year: 1925, description: `In spring 1922, Nick Carraway—a Yale alumnus from the Midwest and a World War I veteran—journeys to New York City to obtain employment as a bond salesman. He rents a bungalow in the Long Island village of West Egg, next to a luxurious estate inhabited by Jay Gatsby, an enigmatic multi-millionaire who hosts dazzling soirées yet does not partake in them.`},

    { id: 4, img: '/moby.jpeg', title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', rating: 4.1, year: 1851, description: `Ishmael travels in December from Manhattan Island to New Bedford, Massachusetts, with plans to sign up for a whaling voyage. The inn where he arrives is overcrowded, so he must share a bed with the tattooed cannibal Polynesian Queequeg, a harpooneer whose father was king of the fictional island of Rokovoko. The next morning, Ishmael and Queequeg attend Father Mapple's sermon on Jonah, then head for Nantucket. Ishmael signs up with the Quaker ship-owners Bildad and Peleg for a voyage on their whaler Pequod. Peleg describes Captain Ahab: "He's a grand, ungodly, god-like man" who nevertheless "has his humanities".` },

    { id: 5, img: '/war.jpeg', title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction', rating: 4.6, year: 1869, description: `The novel begins in July 1805 in Saint Petersburg, at a soirée given by Anna Pavlovna Scherer, the maid of honour and confidante to the dowager Empress Maria Feodorovna. Many of the main characters are introduced as they enter the salon. Pierre (Pyotr Kirilovich) Bezukhov is the illegitimate son of a wealthy count. He is about to become embroiled in a struggle for his inheritance, since the count is dying after a series of strokes. Educated abroad at his father's expense following his mother's death, Pierre is kindhearted but socially awkward, and finds it difficult to integrate into Petersburg society. It is known to everyone at the soirée that Pierre is his father's favorite of all the old count's illegitimate progeny.`},

    { id: 6, img: '/pride.jpeg', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', rating: 4.9, year: 1813, description: `In the early 19th century, the Bennet family live at their Longbourn estate, situated near the village of Meryton in Hertfordshire, England. Mrs Bennet's greatest desire is to marry off her five daughters to secure their futures.The arrival of Mr Bingley, a rich bachelor who rents the neighbouring Netherfield estate, gives her hope that one of her daughters might contract an advantageous marriage, because "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife".` },

    { id: 7, img: '/rye.jpeg', title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', rating: 4.2, year: 1951, description: `Holden Caulfield recalls the events of a long weekend, shortly before the previous year's Christmas. The story begins at Pencey Preparatory Academy, a boarding school in Pennsylvania, where he has been expelled after failing all his classes, except English. Later, Holden agrees to write an English composition for his roommate, Ward Stradlater, who is heading out on a date. He is distressed when he learns that Stradlater's date is Jane Gallagher, with whom Holden has been infatuated. When Stradlater returns, hours later, he fails to appreciate the deeply personal composition Holden has written for him about the baseball glove of Holden's late brother, Allie, who died from leukemia years earlier, and refuses to say whether he had sex with Jane.` },

    { id: 8, img: '/hobbit.jpeg', title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 4.8, year: 1937, description: `Gandalf tricks Bilbo Baggins into hosting a party for Thorin Oakenshield and his band of twelve dwarves (Dwalin, Balin, Kili, Fili, Dori, Nori, Ori, Oin, Gloin, Bifur, Bofur, and Bombur), who go over their plans to reclaim their ancient home, Lonely Mountain, and its vast treasure from the dragon Smaug. Gandalf unveils Thrór's map showing a secret door into the Mountain and proposes that the dumbfounded Bilbo serve as the expedition's "burglar". The dwarves ridicule the idea, but Bilbo, indignant, joins despite himself.` },

    { id: 9, img: '/brave.jpeg', title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', rating: 4.3, year: 1932, description: `Holden Caulfield recalls the events of a long weekend, shortly before the previous year's Christmas. The story begins at Pencey Preparatory Academy, a boarding school in Pennsylvania, where he has been expelled after failing all his classes, except English. Later, Holden agrees to write an English composition for his roommate, Ward Stradlater, who is heading out on a date. He is distressed when he learns that Stradlater's date is Jane Gallagher, with whom Holden has been infatuated. When Stradlater returns, hours later, he fails to appreciate the deeply personal composition Holden has written for him about the baseball glove of Holden's late brother, Allie, who died from leukemia years earlier, and refuses to say whether he had sex with Jane.` },

    { id: 10, img: '/mocking.jpeg', title: 'The Odyssey', author: 'Homer', genre: 'Epic', rating: 4.7, year: '8th Century BC', description: `The novel begins in July 1805 in Saint Petersburg, at a soirée given by Anna Pavlovna Scherer, the maid of honour and confidante to the dowager Empress Maria Feodorovna. Many of the main characters are introduced as they enter the salon. Pierre (Pyotr Kirilovich) Bezukhov is the illegitimate son of a wealthy count. He is about to become embroiled in a struggle for his inheritance, since the count is dying after a series of strokes. Educated abroad at his father's expense following his mother's death, Pierre is kindhearted but socially awkward, and finds it difficult to integrate into Petersburg society. It is known to everyone at the soirée that Pierre is his father's favorite of all the old count's illegitimate progeny.` },

    { id: 11, img: '/brothers.jpeg', title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', genre: 'Philosophy', rating: 4.8, year: 1880, description: `Ishmael travels in December from Manhattan Island to New Bedford, Massachusetts, with plans to sign up for a whaling voyage. The inn where he arrives is overcrowded, so he must share a bed with the tattooed cannibal Polynesian Queequeg, a harpooneer whose father was king of the fictional island of Rokovoko. The next morning, Ishmael and Queequeg attend Father Mapple's sermon on Jonah, then head for Nantucket. Ishmael signs up with the Quaker ship-owners Bildad and Peleg for a voyage on their whaler Pequod. Peleg describes Captain Ahab: "He's a grand, ungodly, god-like man" who nevertheless "has his humanities"` },

    { id: 12, img: '/hobbit.jpeg', title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', rating: 4.6, year: 1988, description: `Gandalf tricks Bilbo Baggins into hosting a party for Thorin Oakenshield and his band of twelve dwarves (Dwalin, Balin, Kili, Fili, Dori, Nori, Ori, Oin, Gloin, Bifur, Bofur, and Bombur), who go over their plans to reclaim their ancient home, Lonely Mountain, and its vast treasure from the dragon Smaug. Gandalf unveils Thrór's map showing a secret door into the Mountain and proposes that the dumbfounded Bilbo serve as the expedition's "burglar". The dwarves ridicule the idea, but Bilbo, indignant, joins despite himself.` },

    { id: 13, img: '/1984.jpeg', title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', genre: 'Magical Realism', rating: 4.7, year: 1967, description: `Rodion Romanovich Raskolnikov, a former law student, lives in extreme poverty in a tiny rented room in Saint Petersburg. Isolated and antisocial, he has abandoned all attempts to support himself and is brooding obsessively on a scheme he has devised to murder and rob an elderly pawnbroker. On the pretext of pawning a watch, he visits her apartment, but he remains unable to commit himself. Later in a tavern, he makes the acquaintance of Semyon Zakharovich Marmeladov, a drunkard who recently squandered his family's little wealth. Marmeladov tells him about his teenage daughter, Sonya, who has become a prostitute in order to support the family. The next day, Raskolnikov receives a letter from his mother in which she describes the problems of his sister Dunya, who has been working as a governess, with her ill-intentioned employer, Svidrigailov.` },

    { id: 14, img: '/moby.jpeg', title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Fiction', rating: 4.5, year: 1866, description: `Rodion Romanovich Raskolnikov, a former law student, lives in extreme poverty in a tiny rented room in Saint Petersburg. Isolated and antisocial, he has abandoned all attempts to support himself and is brooding obsessively on a scheme he has devised to murder and rob an elderly pawnbroker. On the pretext of pawning a watch, he visits her apartment, but he remains unable to commit himself. Later in a tavern, he makes the acquaintance of Semyon Zakharovich Marmeladov, a drunkard who recently squandered his family's little wealth. Marmeladov tells him about his teenage daughter, Sonya, who has become a prostitute in order to support the family. The next day, Raskolnikov receives a letter from his mother in which she describes the problems of his sister Dunya, who has been working as a governess, with her ill-intentioned employer, Svidrigailov.` },

    { id: 15, img: '/war.jpeg', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 4.9, year: 1954 , description: `The novel begins in July 1805 in Saint Petersburg, at a soirée given by Anna Pavlovna Scherer, the maid of honour and confidante to the dowager Empress Maria Feodorovna. Many of the main characters are introduced as they enter the salon. Pierre (Pyotr Kirilovich) Bezukhov is the illegitimate son of a wealthy count. He is about to become embroiled in a struggle for his inheritance, since the count is dying after a series of strokes. Educated abroad at his father's expense following his mother's death, Pierre is kindhearted but socially awkward, and finds it difficult to integrate into Petersburg society. It is known to everyone at the soirée that Pierre is his father's favorite of all the old count's illegitimate progeny.`}
];

const BookCard = props => {
    const {id} = useParams()
    const details = initialBooks.find(eachBook => eachBook.id == id)
    const {title, author, rating, genre, img, year, description} = details
    const navigate = useNavigate(-1)

    const getPreviousPage = () => {
        navigate(-1)
    }

    return (
        <ReactContext.Consumer>
            {value => {
                const {addBooks} = value
                const add = () => {
                    console.log('in')
                    addBooks(details)
                }

                return(
                    <>
                        <Header/>
                        <div className="book-main-con">
                            <button className="back" type="button" onClick={getPreviousPage}>
                                <IoMdArrowRoundBack className="arrow" />
                                Back
                            </button>
                            <div className="image-temp">
                                <div className="image-con">
                                    <img src={img} alt={title} className="cover-page" />
                                </div>
                                <div className="details">
                                    <h3 className="book-title">{title}</h3>
                                    <p className="book-author">{author}</p>
                                    <div className="temp">
                                        <p className="book-genre">{genre} <span className="span"> | </span> </p>
                                        <p className="book-year"> Published at {year} <span className="span"> | </span></p>
                                        <p className="book-rating" >Rating: {rating}</p>
                                    </div>
                                    
                                    <h1 className="plot">Plot</h1>
                                    <p className="plot-para">{description}</p>
                                    <button className="add-library" type="button" onClick={add}>Add to My Library</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}
        </ReactContext.Consumer>
  
    )
    
}

export default BookCard