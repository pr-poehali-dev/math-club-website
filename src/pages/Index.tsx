import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const teachers = [
    {
      name: "Анна Петрова",
      qualification: "Кандидат физико-математических наук",
      experience: "15 лет преподавания",
      specialization: "Алгебра и теория чисел",
      achievements: "Подготовила 50+ призёров олимпиад",
      image: "https://cdn.poehali.dev/projects/f260302e-31c7-4507-8d94-4105f36278e7/files/7df784b4-6c25-4c64-99ba-74630d51289c.jpg"
    },
    {
      name: "Дмитрий Соколов",
      qualification: "Доктор математических наук, профессор МГУ",
      experience: "20 лет преподавания",
      specialization: "Геометрия и комбинаторика",
      achievements: "Автор 30+ научных публикаций",
      image: "https://cdn.poehali.dev/projects/f260302e-31c7-4507-8d94-4105f36278e7/files/d914fb67-3953-41d6-a1fe-2bf583a1ecff.jpg"
    },
    {
      name: "Екатерина Волкова",
      qualification: "Магистр математики, победитель IMO",
      experience: "8 лет преподавания",
      specialization: "Олимпиадная математика",
      achievements: "Тренер сборной на международных олимпиадах",
      image: "https://cdn.poehali.dev/projects/f260302e-31c7-4507-8d94-4105f36278e7/files/7df784b4-6c25-4c64-99ba-74630d51289c.jpg"
    }
  ];

  const targetAudience = [
    {
      icon: "GraduationCap",
      title: "Школьники 5-7 классов",
      description: "Развиваем математическое мышление и закладываем крепкий фундамент для будущих успехов"
    },
    {
      icon: "Trophy",
      title: "Школьники 8-11 классов",
      description: "Углублённая подготовка к олимпиадам и ЕГЭ с индивидуальным подходом"
    },
    {
      icon: "Star",
      title: "Одарённые дети",
      description: "Специальные программы для талантливых учеников, желающих участвовать в олимпиадах"
    }
  ];

  const schedule = [
    {
      day: "Понедельник",
      classes: [
        { time: "15:00 - 16:30", group: "5-6 классы", teacher: "Анна Петрова", price: "2 500 ₽" },
        { time: "17:00 - 18:30", group: "7-8 классы", teacher: "Дмитрий Соколов", price: "3 000 ₽" }
      ]
    },
    {
      day: "Среда",
      classes: [
        { time: "15:00 - 16:30", group: "9-11 классы", teacher: "Екатерина Волкова", price: "3 500 ₽" },
        { time: "17:00 - 18:30", group: "Олимпиадная группа", teacher: "Екатерина Волкова", price: "4 000 ₽" }
      ]
    },
    {
      day: "Суббота",
      classes: [
        { time: "10:00 - 11:30", group: "5-6 классы", teacher: "Анна Петрова", price: "2 500 ₽" },
        { time: "12:00 - 13:30", group: "7-8 классы", teacher: "Дмитрий Соколов", price: "3 000 ₽" },
        { time: "14:00 - 15:30", group: "9-11 классы", teacher: "Дмитрий Соколов", price: "3 500 ₽" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Елена Смирнова",
      role: "Мама ученика 7 класса",
      text: "Сын занимается уже год. Математика из нелюбимого предмета стала любимой! Занял призовое место на городской олимпиаде. Спасибо преподавателям за профессионализм и индивидуальный подход.",
      rating: 5
    },
    {
      name: "Михаил",
      role: "Ученик 10 класса",
      text: "Готовлюсь к ЕГЭ с Екатериной Волковой. Занятия интересные, разбираем сложные задачи, которые в школе не проходят. Уверен, что сдам на высокий балл!",
      rating: 5
    },
    {
      name: "Ольга Петрова",
      role: "Мама ученицы 6 класса",
      text: "Дочь ходит с удовольствием! Анна Сергеевна умеет объяснить сложное простым языком. Оценки в школе улучшились, появился интерес к математике.",
      rating: 5
    },
    {
      name: "Александр Иванов",
      role: "Папа ученика 9 класса",
      text: "Отличный кружок! Небольшие группы, внимательные преподаватели. Сын стал более уверенным в математике, появилась мотивация участвовать в олимпиадах.",
      rating: 5
    },
    {
      name: "Анастасия",
      role: "Ученица 8 класса",
      text: "Занимаюсь в олимпиадной группе. Дмитрий Викторович показывает нестандартные подходы к решению задач. Благодаря кружку победила в региональной олимпиаде!",
      rating: 5
    },
    {
      name: "Татьяна Волкова",
      role: "Мама ученика 5 класса",
      text: "Ребёнок с нетерпением ждёт каждое занятие! Преподаватели создают дружескую атмосферу, где не страшно ошибиться. Математика перестала быть пугающим предметом.",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-primary">МатКружок</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a 
                href="#about" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                О кружке
              </a>
              <a 
                href="#teachers" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Преподаватели
              </a>
              <a 
                href="#audience" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Для кого
              </a>
              <a 
                href="#schedule" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Расписание
              </a>
              <a 
                href="#testimonials" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </a>
              <Button 
                size="sm"
                onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Контакты
              </Button>
            </div>
            <Button 
              size="sm" 
              variant="ghost"
              className="md:hidden"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Menu" className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      <section 
        className="relative py-20 px-4 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/projects/f260302e-31c7-4507-8d94-4105f36278e7/files/41c5fff2-898c-49e3-9d7d-f69b6ebc86b6.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-900/90"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Математический кружок для школьников
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-50">
              Развиваем логику, готовим к олимпиадам, влюбляем в математику
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50 font-semibold text-lg px-8 py-6 hover-scale"
              onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            О кружке
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <Icon name="BookOpen" className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Наша программа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Авторская методика, сочетающая классическую математику с современными подходами. 
                  Программа адаптируется под уровень каждого ученика, от базового до олимпиадного.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Users" className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Формат занятий</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Занятия проходят в малых группах до 8 человек, что позволяет уделить внимание 
                  каждому ученику. Также доступны индивидуальные занятия с преподавателем.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Target" className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Наши цели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Развитие логического мышления, подготовка к олимпиадам различного уровня, 
                  формирование устойчивого интереса к математике и науке в целом.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Award" className="w-12 h-12 text-primary mb-4" />
                <CardTitle>Результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Более 100 призёров городских и всероссийских олимпиад за последние 5 лет. 
                  90% наших выпускников поступают в ведущие технические вузы страны.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Наши преподаватели
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Команда профессионалов с учёными степенями и богатым опытом
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="overflow-hidden hover-scale">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {teacher.qualification}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Clock" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{teacher.experience}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Brain" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{teacher.specialization}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Medal" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{teacher.achievements}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="audience" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Для кого?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <Card key={index} className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={item.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Расписание и цены
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите удобное время для занятий
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {schedule.map((day, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-center text-primary flex items-center justify-center gap-2">
                    <Icon name="Calendar" className="w-5 h-5" />
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {day.classes.map((classItem, classIndex) => (
                      <div key={classIndex} className="border-l-4 border-primary/30 pl-4 py-2">
                        <div className="flex items-center gap-2 text-primary font-semibold mb-1">
                          <Icon name="Clock" className="w-4 h-4" />
                          <span className="text-sm">{classItem.time}</span>
                        </div>
                        <div className="text-sm font-medium mb-1">{classItem.group}</div>
                        <div className="text-xs text-muted-foreground mb-2">{classItem.teacher}</div>
                        <div className="text-lg font-bold text-primary">{classItem.price}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Users" className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Групповые занятия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">До 8 человек в группе</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="User" className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Индивидуальные</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">От 5 000 ₽ за занятие</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Icon name="Percent" className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Первое занятие</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Бесплатно!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Отзывы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят наши ученики и родители
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription className="text-xs">{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Ломоносова, д. 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@mathclub.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Calendar" className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 14:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Записаться на занятие</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение (необязательно)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full hover-scale">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-blue-100">
            © 2024 Математический кружок. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;