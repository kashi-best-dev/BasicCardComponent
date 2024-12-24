import Card from "../card/card.jsx";
import styles from "./Root.module.css";
function Root() {
  const cards = [
    {
      name: "React",
      image_url: "https://reactjs.org/logo-og.png",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      name: "Vue",
      image_url: "https://vuejs.org/images/logo.png",
      content: "Vue is a progressive framework for building user interfaces.",
    },
    {
      name: "Angular",
      image_url: "https://angular.io/assets/images/logos/angular/angular.svg",
      content:
        "Angular is a platform for building mobile and desktop web applications.",
    },

    {
      name: "Django",
      image_url:
        "https://www.djangoproject.com/m/img/logos/django-logo-negative.png",
      content:
        "Django is a high-level Python web framework for rapid development.",
    },
    {
      name: "Laravel",
      image_url: "https://laravel.com/img/logomark.min.svg",
      content: "Laravel is a PHP framework for building web applications.",
    },
    {
      name: "Bootstrap",
      image_url:
        "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
      content:
        "Bootstrap is a framework for building responsive websites with HTML, CSS, and JS.",
    },
    {
      name: "Material UI",
      image_url: "https://mui.com/static/logo.png",
      content:
        "Material UI is a popular React component library that implements Google's Material Design.",
    },
    {
      name: "Next.js",
      image_url: "https://nextjs.org/static/favicon/favicon-32x32.png",
      content:
        "Next.js is a React framework for building server-side rendered applications.",
    },

    {
      name: "MongoDB",
      image_url: "https://www.mongodb.com/assets/images/global/favicon.ico",
      content:
        "MongoDB is a NoSQL database known for its flexibility and scalability.",
    },

    {
      name: "PostgreSQL",
      image_url:
        "https://www.postgresql.org/media/img/about/press/elephant.png",
      content:
        "PostgreSQL is an open-source, object-relational database system.",
    },
  ];

  return (
    <div className={styles.Root}>
      {cards.map((cards) => (
        <Card
          name={cards.name}
          image={cards.image_url}
          content={cards.content}
        />
      ))}
    </div>
  );
}

export default Root;
