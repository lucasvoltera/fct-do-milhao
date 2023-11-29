import { QuestionDifficulty } from "~/data/questions/question-difficulty";
import { Translation } from "~/i18n";

export const en: Translation = {
  gameName: "ComputaShow",
  home: {
    and: "and",
    welcome: "Welcome to ComputaShow!",
    welcomeMessage: "You know what it is? It's a quiz game about Computer Architecture and Operating Systems.",
    singlePlayer: "Let's Play",
    projectDevelopedBy: "This project was developed by",
    forTheDisciplineOfFPGA: " for the FPGA course.",
  },
  inGame: {
    loading: "Loading, hold on...",
    gameState: {
      over: "Oops, wrong answer!",
      won: "Nailed it! Well done!",
      playing: "Time's up!",
    },
    actions: {
      stop: "Stop",
      hit: "Hit",
      miss: "Miss",
      skip: "Skip",
    },
    questionLabel: "Question #",
    gameOver: {
      message: "You scored {points} points! Wow, take a seat!",
      actions: {
        backToMainMenu: "Back to start",
      },
    },
    gameWon: {
      message: "Congratulations!!! You scored {points} points!",
    },
  },
  topics: {
    computerArchitecture: {
      name: "Computer Architecture",
      questions: [
        {
          predicate: "What is a digital circuit?",
          answers: [
            "A circuit that operates with analog signals",
            "A circuit that operates with digital signals",
            "A circuit that operates with continuous signals",
            "A circuit that operates with discrete signals"
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2
        },
        {
          predicate: "Which numerical system is most commonly used in digital circuits?",
          answers: ["Decimal system", "Binary system", "Hexadecimal system", "Octal system"],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2
        },
        {
          predicate: 'What is a "logical gate" in digital circuits?',
          answers: [
            "A device for performing floating-point number calculations",
            "A component for converting digital signals to analog signals",
            "A device that performs a logical operation",
            "A type of battery"
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3
        },
        {
          predicate: 'What is the result of the "AND" operation when the operands are 1 and 0, respectively?',
          answers: ["1", "0", "Depends on the values of the operands", "2"],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2
        },
        {
          predicate: 'What is the result of the "Exclusive OR" (XOR) operation when both operands are equal?',
          answers: ["1", "0", "Depends on the values of the operands", "2"],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2
        },
        {
          predicate: "What is a flip-flop in digital circuits?",
          answers: [
            "A memory device that stores a single bit of information",
            "A device used to generate square waves",
            "A type of transistor",
            "A device for generating analog signals"
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1
        },
        {
          predicate: "Qual é a função principal de um codificador em circuitos digitais?",
          answers: [
            "Compact data to occupy less space.",
            "Adjust current to make the circuit smile",
            "Encode information",
            "Juggle with analog signals",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: 'What does the term "clock" represent in digital circuits?',
          answers: [
            "A device that transforms analog signals into digital emojis",
            "A component used to synchronize operations in circuits",
            "A type of battery",
            "A type of memory",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "Qual é a unidade de medida padrão para representar a frequência do clock em circuitos digitais",
          answers: ["Megabytes", "Hertz", "Watts", "Volts"],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "O que é a Unidade Central de Processamento (CPU) em um computador?",
          answers: [
            "The part of the computer responsible for executing instructions and processing data.",
            "The part of the computer where input devices are connected.",
            "The main memory of the computer.",
            "The computer's graphics card.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "Qual é a principal função da Memória RAM em um computador?",
          answers: [
            "Temporarily store data and instructions for the CPU to access quickly.",
            "Permanently store system and user data.",
            "Control all computer operations.",
            "Process graphics and images on the computer.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "O que é um barramento de sistema em Arquitetura de Computadores?",
          answers: [
            "A device used to convert digital signals to analog signals.",
            "A unit specialized in processing graphics and images.",
            "The part of the processor that coordinates and controls the execution of instructions.",
            "A set of communication lines that allow data transfer between computer components.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "What is a bit in terms of Computer Architecture?",
          answers: [
            "A unit of measurement of processor speed.",
            "An emoji.",
            "The most basic unit of information, representing a binary digit (0 or 1).",
            "A unit of clock frequency.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: "What is the function of the hard disk drive (HDD) in a computer?",
          answers: [
            "Control the execution of processor instructions.",
            "Permanently store system and user data, even when the computer is turned off.",
            "Display information on the computer screen.",
            "Regulate the flow of power in the computer.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "What is the Von Neumann Architecture?",
          answers: [
            "A computer architecture model that uses multiple processors.",
            "A computer architecture model that eliminates the use of RAM.",
            "A computer architecture model that uses only analog devices.",
            "A computer architecture model that integrates memory (data and instructions) with the processor performing operations.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "What is the Control Unit in a processor?",
          answers: [
            "The part of the processor that coordinates and controls the execution of instructions, ensuring that all operations are performed at the right time.",
            "The part of the processor responsible for processing graphics and images.",
            "The permanent memory of the computer.",
            "The part of the processor that synchronizes operations.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "What is the difference between RAM and Cache Memory in a computer?",
          answers: [
            "RAM is faster and directly accessible, while Cache Memory is slower and randomly accessed.",
            "RAM is smaller and more expensive, while Cache Memory is larger and cheaper.",
            "RAM is used only for storing temporary data, while Cache Memory is used for storing permanent data.",
            "RAM is slower and randomly accessed, while Cache Memory is faster and directly accessible.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 4,
        },
        {
          predicate: "What is the instruction pipeline in Computer Architecture?",
          answers: [
            "An advanced form of memory used to store operating system instructions",
            "A processing model that allows the parallel execution of multiple instructions.",
            "A type of bus used exclusively to transfer instructions.",
            "A component that controls the flow of data between the CPU and main memory, sequentially.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 2,
        },
        {
          predicate: "In 32-bit architecture, how many bytes are required to represent a memory address?",
          answers: ["4 bytes", "8 bytes", "16 bytes", "32 bytes"],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "What is the role of the Program Counter in a processor?",
          answers: [
            "Temporarily store data being processed.",
            "Maintain the address of the next instruction to be fetched from memory.",
            "Control the processor's control unit.",
            "Manage communication between the CPU and input/output devices.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 2,
        },
        {
          predicate: "What is the Fetch-Decode-Execute cycle in a processor?",
          answers: [
            "A cycle that performs data transfer between the CPU and RAM.",
            "An operation cycle used only in processors with CISC architecture.",
            "A cycle that fetches, decodes, and executes instructions stored in memory.",
            "An operation cycle used only in processors with RISC architecture.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What does SIMD (Single Instruction, Multiple Data) architecture consist of?",
          answers: [
            "An architecture that uses a reduced set of complex instructions.",
            "An architecture that allows parallel execution of multiple instructions.",
            "An architecture with multiple processors executing different tasks.",
            "An architecture that allows a single instruction to be applied to multiple data simultaneously.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 4,
        },
        {
          predicate: "What is the Floating-Point Unit (FPU) in a processor?",
          answers: [
            "A unit specialized in processing graphics and images.",
            "The part of the processor responsible for storing system and user data.",
            "The part of the processor that coordinates and controls the execution of instructions.",
            "The unit that performs mathematical operations involving floating-point numbers.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 4,
        },
        {
          predicate: "What is a multiplexer (MUX) in digital circuits?",
          answers: [
            "A device used to convert analog signals to digital signals.",
            "A device used to select among multiple inputs and direct one of them to the output.",
            "A device used to permanently store system and user data.",
            "A circuit that performs multiplication operations on binary numbers.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 2,
        },
        {
          predicate: "What characterizes a decoder in digital circuits?",
          answers: [
            "A device that controls the current in a digital circuit.",
            "A circuit that performs counting operations on decimal numbers.",
            "A component that converts digital signals to analog signals.",
            "A circuit that converts binary codes into corresponding output signals.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 4,
        },
        {
          predicate: 'What is the output of an "OR" gate if both inputs are 0 (low logic level)?',
          answers: ["1", "0", "Depends on the values of the other gates.", "Cannot be predicted."],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 2,
        },
        {
          predicate: 'What is the output of an "AND" gate if both inputs are 1 (high logic level)?',
          answers: ["1", "0", "Depends on the values of the other gates.", "Cannot be predicted."],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: 'What is a "NAND" (NOT AND) logical gate?',
          answers: [
            "A gate that performs Exclusive OR (XOR) operation between two inputs.",
            "A gate that performs NOT Exclusive OR (XNOT) operation on a single input.",
            "A gate that performs the AND operation and then inverts the result.",
            "A gate that performs the NOR operation and then inverts the result.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: 'What is an "XNOR" (NOR Exclusive) logical gate?',
          answers: [
            "A gate that performs Exclusive OR (XOR) operation and then inverts the result.",
            "A gate that performs Exclusive AND (XAND) operation between two inputs.",
            "A gate that performs NOR Exclusive (NXOR) operation between two inputs.",
            "A gate that performs NOT Exclusive OR (XNOT) operation on a single input.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "Question: In terms of processor architecture, what characterizes exception handling units?",
          answers: [
            "Units responsible for transferring data between the CPU and memory.",
            "Units responsible for controlling the execution of instructions.",
            "Units specialized in handling unexpected events during execution.",
            "Units responsible for temporarily storing data.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
        {
          predicate: "What is the concept of data dependency in a program's instructions?",
          answers: [
            "A situation where an instruction depends on the results of other instructions to be executed.",
            "A technique that uses encrypted data to increase information security.",
            "A situation where two instructions compete for the same hardware resource.",
            "A technique that allows the execution of multiple instructions in parallel.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 1,
        },
        {
          predicate: "What is the concept of branch prediction in processors?",
          answers: [
            "A technique that predicts the number of branches a program will execute.",
            "A technique that predicts the memory addresses that will be accessed.",
            "A technique that predicts the results of complex mathematical operations.",
            "A technique that predicts the instructions that will be executed after a conditional branch.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "What is Out-of-Order Execution in processors?",
          answers: [
            "A technique that reorders program instructions to optimize execution time.",
            "A technique that allows the processor to execute multiple instructions simultaneously.",
            "A technique that allows the processor to execute instructions in parallel, disregarding the program's order.",
            "A technique that executes complex instructions outside the normal sequence of operations.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
        {
          predicate: "What is the Karnaugh Map minimization method in digital circuits?",
          answers: [
            "A method for simplifying circuits using boolean algebra.",
            "A method for optimizing digital circuits using statistical techniques.",
            "A method of optimizing circuits using machine learning algorithms.",
            "A method for converting analog signals to digital signals.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 1,
        },
        {
          predicate: "What are sequential circuits in digital circuits?",
          answers: [
            "Circuits that have no memory and process only real-time information.",
            "Circuits that do not use clock signals for synchronization.",
            "Circuits that have memory and use information from previous states for decision-making.",
            "Circuits that use only logic gates and have no memory elements.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
        {
          predicate: "What is the FPGA (Field-Programmable Gate Array) architecture?",
          answers: [
            "An architecture that uses programmable logic gates for mathematical operations.",
            "An architecture with multiple parallel processors.",
            "An architecture that uses sequential logic gates for instruction execution.",
            "An architecture that allows users to program its logic gates to implement specific circuits.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "What is an adder in digital circuits?",
          answers: [
            "A circuit that performs addition operations on binary numbers.",
            "A circuit that performs multiplication operations on binary numbers.",
            "A circuit that performs subtraction operations on binary numbers.",
            "A circuit that performs comparison operations between binary numbers.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 1,
        },
        {
          predicate: "What are synchronous and asynchronous circuits in digital circuits?",
          answers: [
            "Circuits that use only clock signals for synchronization.",
            "Circuits that do not use clock signals for synchronization.",
            "Circuits that have no memory elements.",
            "Circuits that use only basic logic gates.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 1,
        }        
      ],
    },
    operatingSystems: {
      name: "Operating Systems",
      questions: [
        {
          predicate: "What are device drivers?",
          answers: ["Bus drivers", "Programs that enable the operation of a device", "Memory modules", "Network interfaces"],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "What is an operating system?",
          answers: [
            "A program that manages resources and provides services to application programs.",
            "A hardware device that stores user data.",
            "A network of interconnected computers.",
            "A text editing program.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "What is the main function of an operating system?",
          answers: [
            "To control and allocate hardware resources and provide services to programs.",
            "To display images on the computer screen.",
            "To manage internet traffic routing.",
            "To perform complex mathematical calculations.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "What is a file in an operating system?",
          answers: [
            "A central processing unit of the system.",
            "A graphical user interface.",
            "A storage unit for data.",
            "Security software.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: "What are common types of operating systems?",
          answers: ["Windows, Mac, and Linux.", "Browsers, Antivirus, and Text Editors.", "Word, Excel, and PowerPoint.", "Mouse, Keyboard, and Monitor."],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "What is a process in an operating system?",
          answers: [
            "A document describing the user's interaction with the system.",
            "A running task, such as a word processing program.",
            "A security feature.",
            "An essential hardware component.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "What is RAM in an operating system?",
          answers: [
            "Permanent storage for user data.",
            "Memory used to store the operating system.",
            "Temporary memory used to store data while the system is running.",
            "A type of graphics processor.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: "What is the Command Line Interface (CLI) in an operating system?",
          answers: [
            "An area for storing system files.",
            "A programming language.",
            "A graphical user interface.",
            "An interface that accepts text commands to interact with the system.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "What is a file system in an operating system?",
          answers: [
            "A network feature for transferring files between computers.",
            "A system folder for temporary files.",
            "An organizational structure for storing and retrieving data on a disk.",
            "A hardware device for permanent storage.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 3,
        },
        {
          predicate: "What is multitasking in an operating system?",
          answers: [
            "A system that allows the execution of multiple tasks simultaneously.",
            "A cloud storage unit.",
            "A method for automatically saving documents.",
            "A security function of the operating system.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "What is the function of a scheduler in an operating system?",
          answers: [
            "Manage the system's RAM.",
            "Select and control the execution of processes.",
            "Create automatic backups of files.",
            "Control the operation of the hard disk.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 2,
        },
        {
          predicate: "What is a FAT (File Allocation Table) file system?",
          answers: [
            "A file system specific for storing images.",
            "An open-source operating system.",
            "A method for creating compressed files.",
            "A type of file system used by some operating systems.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "What is disk fragmentation in an operating system?",
          answers: [
            "A method of data encryption.",
            "A way to organize files into different folders.",
            "A technique to gather all files in one location.",
            "A process where files are split into non-contiguous parts on the disk.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 4,
        },
        {
          predicate: "What are file permissions in operating systems?",
          answers: [
            "Rules that define who can edit files.",
            "A type of encryption for important documents.",
            "A method for compressing files.",
            "A tool for cleaning useless data from the hard drive.",
          ],
          difficulty: QuestionDifficulty.easy,
          correctResponse: 1,
        },
        {
          predicate: "What is a real-time operating system?",
          answers: [
            "A system that responds to events within a defined time.",
            "A system that performs complex tasks quickly.",
            "A system that prioritizes only high CPU-consuming tasks.",
            "A system that runs applications with very fast boot times.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "What is the difference between 32-bit and 64-bit operating systems?",
          answers: [
            "The amount of memory the system can support.",
            "The processing speed of the system.",
            "The number of processes the system can run simultaneously.",
            "The storage capacity of the hard drive.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "What is paging in operating systems?",
          answers: [
            "A method to divide the hard disk into multiple partitions.",
            "A method to increase the hard disk's storage capacity.",
            "A technique for managing virtual memory.",
            "A method for compressing system files.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is the swapping process in operating systems?",
          answers: [
            "A method for swapping kernel modules of the operating system.",
            "A process to move large files to another partition.",
            "A technique for swapping memory between RAM and disk.",
            "A way to compress files on the hard disk.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is internal fragmentation in operating systems?",
          answers: [
            "A technique to remove unnecessary files from the system.",
            "A situation where memory is divided into multiple partitions.",
            "A situation where memory is wasted due to fixed-size allocation.",
            "A technique to compress data on the hard disk.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is the goal of process scheduling in operating systems?",
          answers: [
            "Reduce system startup time.",
            "Improve CPU processing speed.",
            "Equitably distribute CPU time among processes.",
            "Prioritize only high-priority processes.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is a distributed file system in operating systems?",
          answers: [
            "A system that organizes files by categories.",
            "A system that replicates all files to each computer on the network.",
            "A system that allows file sharing on a network.",
            "A system that compresses files to save storage space.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is a bus in a computer system?",
          answers: [
            "A connection path between hard drives.",
            "A digital highway that transmits data between computer components.",
            "A communication port in a computer network.",
            "A caching technique for frequently used processes.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 2,
        },
        {
          predicate: "What is the role of firmware in a computer?",
          answers: [
            "Manage communication between computer peripherals.",
            "Permanently store the operating system settings.",
            "Control the basic behavior and operation of hardware.",
            "Monitor the integrity of system files.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is cache memory in an operating system?",
          answers: [
            "A type of high-speed main memory.",
            "A type of high-capacity secondary memory.",
            "A type of read-write memory.",
            "A type of memory used to store system files.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "What is memory segmentation in operating systems?",
          answers: [
            "Dividing memory into variable-sized partitions to allocate processes.",
            "Reducing internal fragmentation of main memory.",
            "Eliminating the swapping process to optimize memory.",
            "Compressing system files to save space.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "What are multi-user operating systems?",
          answers: [
            "Systems that support multiple input devices.",
            "Systems that allow access to multiple applications simultaneously.",
            "Systems that allow multiple people to use the computer at the same time.",
            "Systems that have multiple hard drives for storage.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is the function of the Round-Robin algorithm in process scheduling?",
          answers: [
            "Prioritize high-priority processes.",
            "Allocate memory in a circular fashion for processes.",
            "Equitably distribute CPU time among processes.",
            "Execute processes at regular fixed time intervals.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is a Plug and Play device in operating systems?",
          answers: [
            "A device that can be connected and used immediately without manual configuration.",
            "A device that requires manual installation of drivers to function.",
            "A device that can be connected to any USB port.",
            "A device that is not compatible with older operating systems.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 1,
        },
        {
          predicate: "What is kernel mode in operating systems?",
          answers: [
            "An operating mode that runs only user-level applications.",
            "An operating mode that runs kernel and user-level processes simultaneously.",
            "A privileged operating mode that runs the core of the operating system.",
            "An operating mode that prioritizes high CPU consumption tasks.",
          ],
          difficulty: QuestionDifficulty.medium,
          correctResponse: 3,
        },
        {
          predicate: "What is memory fragmentation, and how do operating systems deal with it?",
          answers: [
            "It is dividing memory into small blocks to allocate processes, and operating systems handle it through compaction.",
            "It is the waste of unused memory, and operating systems handle it by merging memory partitions.",
            "It is data loss in main memory, and operating systems handle it through frequent backups.",
            "It is excessive occupation of memory by processes, and operating systems handle it through the page replacement algorithm.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "Explain the concept of swapping in operating systems.",
          answers: [
            "It is the act of switching between different operating systems on a single computer.",
            "It is the method of transferring processes between main memory and secondary memory.",
            "It is the exchange of information between CPUs in networked systems.",
            "It is the practice of migrating programs to the cloud.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "What is the difference between 32-bit and 64-bit operating systems?",
          answers: [
            "64-bit systems have double the performance of 32-bit systems.",
            "32-bit systems are faster but less stable than 64-bit systems.",
            "64-bit systems support a greater amount of RAM and data processing.",
            "32-bit systems are more economical and consume less power.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
        {
          predicate: "What is I/O (Input/Output) scheduling in operating systems?",
          answers: [
            "It is the technique of prioritizing I/O devices based on speed.",
            "It is the process of swapping I/O devices between different computers.",
            "It is the organization of I/O devices in stacks for quick access.",
            "It is the technique of managing and prioritizing requests from I/O devices.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "Explain the concept of page fault in operating systems.",
          answers: [
            "It is a hardware error leading to corruption of memory pages.",
            "It is the congestion of requests for memory pages.",
            "It is the corrupted memory page due to electrical failures.",
            "It is the failure to access a needed page, leading to its retrieval from the disk.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "What is the preemption technique in operating systems?",
          answers: [
            "It is a mechanism that prevents concurrent access to certain resources.",
            "It is a method to optimize the transfer of processes between different CPUs.",
            "It is the ability to interrupt a running process to give priority to a more important process.",
            "It is a system that predicts events before they are executed.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
        {
          predicate: "What is the concept of deadlock in operating systems?",
          answers: [
            "It is a situation where a resource is in use for longer than expected.",
            "It is a state where a process is waiting for a resource that is being used by another process.",
            "It is a logic error in the program that leads to an infinite loop.",
            "It is a critical accident leading to a catastrophic failure in the system.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "What are threads in operating systems?",
          answers: [
            "They are additional security layers used to protect processes from each other.",
            "They are small processes that share the same memory area and resources.",
            "They are boot processes that prepare the system to execute programs.",
            "They are network protocols used for data transmission between systems.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 2,
        },
        {
          predicate: "What is the concept of distributed file systems?",
          answers: [
            "It is a system that distributes data from a single system to various local file systems.",
            "It is a system that organizes files on multiple local disks for quick access.",
            "It is a system that distributes files across multiple disks for data backup.",
            "It is a system that divides and distributes data across different network-connected storage locations.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 4,
        },
        {
          predicate: "What is a page replacement algorithm in operating systems?",
          answers: [
            "It is an algorithm used to prevent corruption of memory pages.",
            "It is a method to rearrange memory pages for faster access.",
            "It is an algorithm that decides which memory page should be removed when memory is full.",
            "It is an algorithm that organizes memory pages into segments to avoid fragmentation.",
          ],
          difficulty: QuestionDifficulty.hard,
          correctResponse: 3,
        },
      ],
    },
  },
};
