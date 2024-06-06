import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { TailSpin } from "react-loader-spinner";

import styles from "./styles.module.scss";
import toast from "react-hot-toast";
import axios from "axios";

interface SatisfactionSurvey {
  title: string;
  question1: {
    title: string;
    answer: number;
  };
  question2: {
    title: string;
    answer: number;
  };
}

const verifyCompanyIdentifier = async (
  companyIdentifier: string,
  setLoading: (value: boolean) => void
) => {
  setLoading(true);
  try {
    await axios.get(
      `https://turtle-apparent-squirrel.ngrok-free.app/user/findone?companyIdentifier=${companyIdentifier}`,
      {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
      }
    );

    setLoading(false);
    return true;
  } catch (error) {
    setLoading(false);
    return false;
  }
};

const Survey = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const { companyIdentifier } = router.query;

  useEffect(() => {
    if (companyIdentifier) {
      verifyCompanyIdentifier(companyIdentifier as string, setLoading)
        .then((response) => {
          if (!response) {
            setError(true);
          }
        })
    }
  }, [companyIdentifier]);

  const [survey, setSurvey] = useState<SatisfactionSurvey[]>([
    {
      title: "Experiência de viagem:",
      question1: {
        title: "Como você avalia a qualidade dos carros?",
        answer: 0,
      },
      question2: {
        title: "Como você avalia a qualidade dos motoristas?",
        answer: 0,
      },
    },
    {
      title: "Experiência com o aplicativo:",
      question1: {
        title: "Facilidade em realizar o pagamento pelo app:",
        answer: 0,
      },
      question2: {
        title: "Facilidade em solicitar um carro pelo app:",
        answer: 0,
      },
    },
  ]);

  const handleNextQuestion = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (
      survey[questionIndex].question1.answer === 0 ||
      survey[questionIndex].question2.answer === 0
    ) {
      toast.error("Por favor, responda todas as perguntas.");
      return;
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (
      survey[questionIndex].question1.answer === 0 ||
      survey[questionIndex].question2.answer === 0
    ) {
      toast.error("Por favor, responda todas as perguntas.");
      return;
    }

    setLoading(true);

    await fetch(
      "https://turtle-apparent-squirrel.ngrok-free.app/satisfaction-survey",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          survey,
          companyIdentifier,
        }),
      }
    );

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <div className={styles.container}>
        <img
          src="/banner.svg"
          alt="banner"
        />
        <div className={styles.formContainer}>
          {loading && (
            <div className="loadingContainer">
              <TailSpin
                visible={true}
                height="80"
                width="80"
                color="var(--primary)"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          )}
          {!submitted && !loading && !error && (
            <form className={styles.form}>
              <h1 onClick={() => console.log(survey)}>
                {survey[questionIndex].title}
              </h1>
              <ul className={styles.questionsList}>
                <li>
                  <p>{survey[questionIndex].question1.title}</p>
                  <ul className={styles.buttonsList}>
                    <div>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <li key={item + survey[questionIndex].question1.title}>
                          <button
                            type="button"
                            className={
                              survey[questionIndex].question1.answer === item
                                ? styles.rangeBtnActive
                                : ""
                            }
                            onClick={() => {
                              setSurvey((prevSurvey) => {
                                const newSurvey = [...prevSurvey];
                                newSurvey[questionIndex].question1.answer =
                                  item;
                                return newSurvey;
                              });
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </div>

                    <div>
                      {[6, 7, 8, 9, 10].map((item) => (
                        <li key={item + survey[questionIndex].question1.title}>
                          <button
                            type="button"
                            className={
                              survey[questionIndex].question1.answer === item
                                ? styles.rangeBtnActive
                                : ""
                            }
                            onClick={() => {
                              setSurvey((prevSurvey) => {
                                const newSurvey = [...prevSurvey];
                                newSurvey[questionIndex].question1.answer =
                                  item;
                                return newSurvey;
                              });
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>
                <li>
                  <p>{survey[questionIndex].question2.title}</p>
                  <ul className={styles.buttonsList}>
                    <div>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <li key={item + survey[questionIndex].question2.title}>
                          <button
                            type="button"
                            className={
                              survey[questionIndex].question2.answer === item
                                ? styles.rangeBtnActive
                                : ""
                            }
                            onClick={() => {
                              setSurvey((prevSurvey) => {
                                const newSurvey = [...prevSurvey];
                                newSurvey[questionIndex].question2.answer =
                                  item;
                                return newSurvey;
                              });
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </div>
                    <div>
                      {[6, 7, 8, 9, 10].map((item) => (
                        <li key={item + survey[questionIndex].question2.title}>
                          <button
                            type="button"
                            className={
                              survey[questionIndex].question2.answer === item
                                ? styles.rangeBtnActive
                                : ""
                            }
                            onClick={() => {
                              setSurvey((prevSurvey) => {
                                const newSurvey = [...prevSurvey];
                                newSurvey[questionIndex].question2.answer =
                                  item;
                                return newSurvey;
                              });
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </div>
                  </ul>
                </li>
              </ul>
              <div className={styles.actions}>
                <button
                  className={styles.backBtn}
                  onClick={handlePrevQuestion}
                  disabled={questionIndex === 0}
                >
                  Anterior
                </button>

                <button
                  onClick={
                    questionIndex === survey.length - 1
                      ? handleSubmit
                      : handleNextQuestion
                  }
                  type="button"
                  className={styles.nextBtn}
                >
                  {questionIndex === survey.length - 1 ? "Enviar" : "Próxima"}
                </button>
              </div>
            </form>
          )}
          {submitted && !loading && !error && (
            <div className={styles.submitted}>
              <h1>Obrigado por responder a pesquisa!</h1>
            </div>
          )}
          {error && !loading && !submitted && (
            <div className={styles.error}>
              <h1>Url inválida.</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Survey;
