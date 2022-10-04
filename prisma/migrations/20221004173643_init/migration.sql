-- CreateTable
CREATE TABLE "Player" (
    "level" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "lastLevel" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("levelId")
);

-- CreateTable
CREATE TABLE "Level" (
    "levelId" SERIAL NOT NULL,
    "chapterId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "sound" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "correct" TEXT NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT NOT NULL,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("levelId")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "chapterId" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("chapterId")
);
