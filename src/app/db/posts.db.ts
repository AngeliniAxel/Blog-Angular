import { Post } from '../interfaces/post.interface';

export const posts: Post[] = [
  {
    id: 2548460933,
    title: 'The Evolution of Batman in Comics and Movies',
    text: `Batman has been a key figure in the comic book industry for decades. 
    From the dark and gritty stories of Frank Miller to the lighter animated series of the 90s, the character has seen numerous adaptations. 
    In film, Tim Burton’s gothic vision in the 80s gave way to Christopher Nolan’s realistic and grounded approach in the Dark Knight trilogy. 
    This constant reinvention is what makes Batman one of the most fascinating characters in pop culture. 
    The ability to evolve while maintaining core elements like the Bat-Signal, Gotham City, and the relationship with characters like Alfred and Commissioner Gordon 
    ensures that Batman remains relevant across different media and generations.`,
    author: 'John Doe',
    image: 'https://i.ytimg.com/vi/enO0W6YuG7k/maxresdefault.jpg',
    date: new Date('2025-03-01'),
    category: { id: 1, title: 'Comics' },
  },
  {
    id: 3394829102,
    title: 'The Rise of Streaming: How TV Series Have Changed',
    text: `Streaming platforms have revolutionized the way we consume TV series. 
    The days of waiting a week for the next episode are gone, replaced by binge-watching entire seasons in a single weekend. 
    Shows like "Stranger Things" and "The Mandalorian" have demonstrated the power of online platforms, 
    while older series like "Breaking Bad" found new life thanks to streaming. 
    With increased budgets and cinematic production quality, TV series now rival blockbuster films in storytelling and visual effects. 
    The shift has also allowed for more diverse narratives, with international hits like "Squid Game" proving that language is no longer a barrier.`,
    author: 'Michael Carter',
    image:
      'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUZRetY0NwWkIBQ-9QF0PLIDcuUCPKgno_8riE_In9tHRgqqTTSG-vGiP5ctXrVMY4PESkV5-x1LE_MGn32QtUZfnoNR4Hx9GoRI.jpg?r=9fa',
    date: new Date('2025-02-18'),
    category: { id: 2, title: 'Series' },
  },
  {
    id: 2476233376,
    title: 'Attack on Titan: A Dark Masterpiece',
    text: `Attack on Titan has redefined the anime genre with its dark themes, complex characters, and intense storytelling. 
    Set in a world where humanity is under threat from gigantic humanoid creatures known as Titans, the story follows Eren Yeager and his friends as they fight for survival and uncover the secrets behind the Titans’ existence. 
    The series explores deep philosophical questions about freedom, morality, and human nature, making it more than just an action series. 
    Hajime Isayama's storytelling combines shocking plot twists, intense battles, and emotional character arcs that keep viewers on the edge of their seats. 
    Its stunning animation and haunting soundtrack by Hiroyuki Sawano further elevate the experience, making Attack on Titan one of the most influential anime of the last decade.`,
    author: 'Alice Johnson',
    image:
      'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/attack-on-titan-eren-yeager-header.jpg',
    date: new Date('2025-03-10'),
    category: { id: 4, title: 'Anime' },
  },
  {
    id: 1511834430,
    title: 'Top 10 Sci-Fi Movies That Changed the Genre',
    text: `Science fiction has evolved significantly over the decades, with certain films changing the direction of the genre and influencing generations of filmmakers. "Metropolis" (1927), one of the earliest examples of sci-fi cinema, set the foundation with its dystopian vision and groundbreaking special effects. Stanley Kubrick's "2001: A Space Odyssey" (1968) raised the genre to an intellectual level, combining deep philosophical themes with groundbreaking visuals and sound design. "Star Wars: A New Hope" (1977) revolutionized science fiction with its space opera style, becoming a cultural phenomenon and establishing a massive franchise. Ridley Scott's "Blade Runner" (1982) merged cyberpunk aesthetics with existential themes, leaving an indelible mark on future sci-fi films. "Alien" (1979) combined horror with sci-fi, introducing a new breed of extraterrestrial terror. The Wachowskis' "The Matrix" (1999) redefined our understanding of reality, using groundbreaking visual effects to present a mind-bending world of simulated consciousness. "Jurassic Park" (1993) showcased the power of CGI and brought dinosaurs to life, setting new standards in visual storytelling. James Cameron's "The Terminator" (1984) introduced a chilling portrayal of artificial intelligence and time travel, influencing sci-fi narratives for years. These films not only defined their time but shaped the future of science fiction.`,
    author: 'Bob Brown',
    image:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2025/03/blade-runner-1982.jpg',
    date: new Date('2025-03-12'),
    category: { id: 3, title: 'Movies' },
  },
  {
    id: 7839210456,
    title: 'Solo Leveling: The Manhwa That Redefined Power Fantasy',
    text: `Solo Leveling has become one of the most influential manhwas in recent years, captivating fans with its breathtaking artwork and compelling power fantasy storyline. 
    Written by Chugong and illustrated by Dubu, the series follows Sung Jin-Woo, an E-rank hunter who is considered the weakest in a world where hunters fight monsters in mysterious gates. 
    However, after a near-death experience in a dungeon, he gains access to a mysterious system that allows him to level up like a video game character. 
    What makes Solo Leveling stand out is its smooth storytelling, stunning fight sequences, and the evolution of its protagonist from an underdog to an unstoppable force. 
    The manhwa also introduces a unique take on the dungeon and guild system, blending RPG elements seamlessly into its world. 
    With an anime adaptation on the horizon, Solo Leveling is set to reach an even larger audience, solidifying its place as one of the greatest modern fantasy series.`,
    author: 'Alex Turner',
    image:
      'https://lede-admin.aftermath.site/wp-content/uploads/sites/55/2025/03/Solo-Leveling-Crunchyroll-Anime-A1-Pictures.jpg?resize=2880%2C1620',
    date: new Date('2025-04-02'),
    category: { id: 4, title: 'Anime' },
  },
  {
    id: 3204361129,
    title: 'The Legacy of Star Wars',
    text: `The legacy of "Star Wars" is unparalleled in the world of cinema and pop culture. Since its debut in 1977, George Lucas' space opera has not only redefined science fiction but also influenced countless aspects of storytelling, special effects, and film marketing. "Star Wars" introduced a galaxy far, far away, blending mythology, adventure, and futuristic technology into a timeless narrative. Its characters—Luke Skywalker, Princess Leia, Darth Vader—have become iconic, resonating with generations of fans worldwide. The groundbreaking use of special effects, especially in the original trilogy, set new standards for the industry. Beyond the films, "Star Wars" has left an indelible mark on television, books, comics, and video games, creating a vast, interconnected universe. The franchise's cultural impact is evident in its ability to inspire new generations of filmmakers, storytellers, and creators, ensuring that the "Star Wars" legacy will continue to thrive for years to come.`,
    author: 'John Doe',
    image: 'https://i.blogs.es/1da08b/1366_2000-9-/1366_2000.jpeg',
    date: new Date('2025-03-18'),
    category: { id: 3, title: 'Movies' },
  },
  {
    id: 6728394012,
    title: 'How Sitcoms Have Evolved Over the Decades',
    text: `Sitcoms have been a staple of television since the early days of broadcasting, but their format has evolved significantly. 
    Classic shows like "Friends" and "Seinfeld" relied on laugh tracks and episodic storytelling, 
    while modern sitcoms such as "Brooklyn Nine-Nine" and "The Good Place" have embraced serialized narratives and diverse characters. 
    The rise of streaming has also allowed sitcoms to experiment with new formats, 
    blending comedy with deeper emotional themes, as seen in "BoJack Horseman" and "Ted Lasso." 
    As the genre continues to evolve, sitcoms remain a reflection of the times, adapting to cultural shifts and audience expectations.`,
    author: 'Emily Rogers',
    image:
      'https://weareintent.com/wp-content/uploads/2023/11/85td8-1024x576.jpg',
    date: new Date('2025-03-01'),
    category: { id: 2, title: 'Series' },
  },
  {
    id: 9361333697,
    title: 'How Marvel Became the King of the Box Office',
    text: `The Marvel Cinematic Universe (MCU) is the highest-grossing film franchise in history. 
      Starting with Iron Man in 2008, the MCU has built a complex, interconnected universe of heroes and villains. 
      Learn how Kevin Feige and the Marvel team managed to create a global phenomenon.`,
    author: 'Alice Johnson',
    image:
      'https://media.licdn.com/dms/image/v2/C4E12AQErtafMaaJeMg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520239752089?e=2147483647&v=beta&t=c9H6Krr3E-5HQFHQUt8g-XYflBpz7TvPuCpviksIYPo',
    date: new Date('2025-03-22'),
    category: { id: 1, title: 'Comics' },
  },
  {
    id: 3353450959,
    title: 'The Influence of Studio Ghibli on Animation',
    text: `Studio Ghibli, founded by Hayao Miyazaki, has created some of the most beautiful and emotional animated films. 
      From Spirited Away to My Neighbor Totoro, Ghibli films explore themes of nature, childhood, and human connection.`,
    author: 'Bob Brown',
    image:
      'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2016/07/spirited-away-miyazaki-1.jpg',
    date: new Date('2025-03-24'),
    category: { id: 3, title: 'Movies' },
  },
  {
    id: 4893027711,
    title: 'Why "Game of Thrones" Defined a Generation',
    text: `"Game of Thrones" wasn't just a fantasy show; it was a cultural phenomenon. 
    Based on George R.R. Martin's books, the series combined epic storytelling, unexpected deaths, and complex political intrigue. 
    It set a new standard for television with its cinematic battle sequences and character-driven narratives. 
    Despite a divisive final season, the show's impact remains undeniable, inspiring spin-offs, fan theories, and endless discussions. 
    It also proved that TV could deliver movie-quality experiences, opening the door for ambitious projects like "House of the Dragon" and "The Witcher."`,
    author: 'Sarah Johnson',
    image:
      'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/gotmulti.jpg',
    date: new Date('2025-01-12'),
    category: { id: 2, title: 'Series' },
  },
  {
    id: 2265512909,
    title: 'The Psychology of Horror Movies',
    text: `Why do people enjoy being scared? 
      Horror films tap into our deepest fears and anxieties, creating a safe space to experience adrenaline and fear. 
      Explore how directors like Alfred Hitchcock and Jordan Peele manipulate sound, lighting, and story to create terror.`,
    author: 'John Doe',
    image:
      'https://www.psychologs.com/wp-content/uploads/2024/06/the-psychology-behind-horror-movies.jpg',
    date: new Date('2025-03-28'),
    category: { id: 3, title: 'Movies' },
  },
];
