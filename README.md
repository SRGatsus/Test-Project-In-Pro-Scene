# A test assignment for the company "Pro-Scene" 
The project was completed as a test assignment for an interview with the company

## Technical specification
>Задание: Разработать веб-приложение для управления задачами (таск-менеджер), используя React.js.\
>Основные требования:
> - Интерфейс пользователя:
> - Главная страница со списком задач.
> - Возможность добавления новых задач.
> - Возможность отмечать задачи как выполненные.
> - Возможность удалять задачи.
> 
>Функциональность:
> - Сохранение состояния приложения между сессиями (использование localStorage).
> - Простая валидация ввода (например, нельзя добавить пустую задачу).\
>
>Дизайн:
> - Чистый и интуитивно понятный интерфейс.
> - Адаптивный дизайн, корректно отображающийся на различных устройствах.
> 
>Код:
> - Чистый и модульный код.
> - Использование функциональных компонентов и хуков React.
> - Комментарии к ключевым участкам кода.
>
> Дополнительно (для продвинутых):
> - Использование Redux или Context API для управления состоянием.
> - Реализация функционала фильтрации задач (например, посмотреть только выполненные или только активные задачи).
> - Анимации при добавлении/удалении задач.
> 
>Результат:
> - Проект должен быть загружен на GitHub с четким README, описывающим как запустить проект локально. 
> - Размещение проекта на GitHub Pages или другой платформе для демонстрации работы приложения в реальном времени.

## Project Launch
There are two ways to launch a project:
1. Locally\
You need to perform the following actions
   * Change\Delete the "homepage" parameter in the file: package.json
   * Installing libraries
   ```npm
    npm install
    ```
    * Project Launch
   ```npm
    npm start dev
    ```
   * Navigating to the url specified in the console

2. Launching the docker container
   * Installing docker from the official website
   * Change\Delete the "homepage" parameter in the file: package.json
   * Run the command in the console
   ```cmd
    docker-compose build
    ```
   * Click on the link: http://localhost/