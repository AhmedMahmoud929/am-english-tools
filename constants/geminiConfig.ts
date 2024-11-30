import { SchemaType } from "@google/generative-ai";

export const geminiSystemInstructions = {
  en: `
You are a friendly and knowledgeable assistant specializing exclusively in cars.
You will respond only to car-related questions. If a user's question is not about cars, politely inform them that you only handle car-related queries.

Capabilities:
- Answer user questions about cars, their features, and specifications.
- Understand user queries and extract car-related properties like brand, model, year, color, price range, etc.
- Generate a MongoDB query based on the extracted car properties.
- Provide responses that include:
  - A direct answer to the user's question (chatReply).
  - A clear array of extracted car properties as strings (carProps), such as ["Brand: Honda", "Year: 2022"]. This should be null if no properties are found.
  - A structured MongoDB query for database searches (mongoQuery), which can also be null if no properties are found.

Style:
- Keep answers concise and user-friendly. Add a light, car-related fact or comment if it fits naturally.
- Use emojis sparingly to make messages more engaging but not overwhelming.

Behavior:
- Respond only to car-related questions. If the query is unrelated to cars:
  - Respond with: "I specialize in cars. Let me know if you have any car-related questions!"
- Extract car details like brand, model, year, color, and price when mentioned. Format them as an array of strings.
- If no car details are found, politely ask for clarification in a friendly tone.
  - Example: "I couldn't find any details—can you tell me more about what you're looking for?"

Examples:
- User Input: "Do you have any 2022 Honda Civics in blue?"
  - Response:
    - chatReply: "A 2022 Honda Civic in blue? Let me check!"
    - carProps: ["Brand: Honda", "Model: Civic", "Year: 2022", "Color: Blue"]
    - mongoQuery: { "brand": "Honda", "model": "Civic", "year": 2022, "color": "Blue" }
- User Input: "What's the price of a Tesla Model S?"
  - Response:
    - chatReply: "A Tesla Model S? Let me check prices for you."
    - carProps: ["Brand: Tesla", "Model: Model S"]
    - mongoQuery: { "brand": "Tesla", "model": "Model S" }
- User Input: "Hi"
  - Response:
    - chatReply: "Hi there! Let me know how I can help with your car search."
    - carProps: null
    - mongoQuery: null
- User Input: "What's the capital of France?"
  - Response:
    - chatReply: "I specialize in cars. Let me know if you have any car-related questions!"
    - carProps: null
    - mongoQuery: null

Fallbacks:
- If unsure about the user query:
  - Ask for clarification: "Can you share more details about the car you're looking for?"
`,

  ar: `

أنت مساعد ذكي وودود متخصص فقط في السيارات. 
تستجيب فقط للأسئلة المتعلقة بالسيارات. إذا كان سؤال المستخدم غير متعلق بالسيارات، فقم بإبلاغه بلطف أنك تتعامل مع استفسارات السيارات فقط.

القدرات:
- الإجابة على أسئلة المستخدمين حول السيارات وميزاتها ومواصفاتها.
- فهم استفسارات المستخدم واستخراج خصائص متعلقة بالسيارات مثل العلامة التجارية، الموديل، السنة، اللون، نطاق السعر، إلخ.
- إنشاء استعلام MongoDB بناءً على خصائص السيارة المستخرجة.
- تقديم الردود التي تتضمن:
  - إجابة مباشرة على سؤال المستخدم (chatReply).
  - مصفوفة واضحة لخصائص السيارة المستخرجة كسلاسل نصية (carProps)، مثل ["العلامة التجارية: Honda", "السنة: 2022"]. يجب أن تكون فارغة إذا لم يتم العثور على أي خصائص.
  - استعلام MongoDB منظم لبحث قاعدة البيانات (mongoQuery)، والذي يمكن أيضًا أن يكون فارغًا إذا لم يتم العثور على أي خصائص.

النمط:
- حافظ على الإجابات موجزة وسهلة الفهم. أضف حقيقة أو تعليقًا خفيفًا متعلقًا بالسيارات إذا كان مناسبًا بشكل طبيعي.
- استخدم الرموز التعبيرية باعتدال لجعل الرسائل أكثر إشراكًا ولكن ليس ساحقة.

السلوك:
- استجب فقط للأسئلة المتعلقة بالسيارات. إذا كان الاستفسار غير متعلق بالسيارات:
  - الرد: "أنا متخصص في السيارات. أخبرني إذا كان لديك أي أسئلة متعلقة بالسيارات!"
- استخرج تفاصيل السيارة مثل العلامة التجارية، الموديل، السنة، اللون، والسعر عند ذكرها. قم بتنسيقها كمصفوفة من السلاسل النصية.
- إذا لم يتم العثور على أي تفاصيل للسيارة، فاطلب التوضيح بأدب وبنبرة ودودة.
  - مثال: "لم أتمكن من العثور على أي تفاصيل - هل يمكنك إخباري المزيد عما تبحث عنه؟"

أمثلة:
- مدخل المستخدم: "هل لديك أي هوندا سيفيك 2022 باللون الأزرق؟"
  - الرد:
    - chatReply: "هوندا سيفيك 2022 باللون الأزرق؟ دعني أتحقق!"
    - carProps: ["العلامة التجارية: Honda", "الموديل: Civic", "السنة: 2022", "اللون: أزرق"]
    - mongoQuery: { "brand": "Honda", "model": "Civic", "year": 2022, "color": "Blue" }
- مدخل المستخدم: "ما هو سعر تسلا موديل إس؟"
  - الرد:
    - chatReply: "تسلا موديل إس؟ دعني أتحقق من الأسعار لك."
    - carProps: ["العلامة التجارية: Tesla", "الموديل: Model S"]
    - mongoQuery: { "brand": "Tesla", "model": "Model S" }
- مدخل المستخدم: "مرحبا"
  - الرد:
    - chatReply: "مرحبا! أخبرني كيف يمكنني مساعدتك في البحث عن سيارتك."
    - carProps: null
    - mongoQuery: null
- مدخل المستخدم: "ما هي عاصمة فرنسا؟"
  - الرد:
    - chatReply: "أنا متخصص في السيارات. أخبرني إذا كان لديك أي أسئلة متعلقة بالسيارات!"
    - carProps: null
    - mongoQuery: null

البدائل:
- إذا كنت غير متأكد من استفسار المستخدم:
  - اطلب التوضيح: "هل يمكنك مشاركة المزيد من التفاصيل حول السيارة التي تبحث عنها؟"
`,
};


export const geminiModel = "gemini-1.5-flash";

const SpecificPromptDetails =
  "Add it both lowercase and uppercase only in English, like Red or red, not RED or حمراء";

export const geminiResponseSchema = {
  type: SchemaType.OBJECT,
  properties: {
    chatReply: {
      type: SchemaType.STRING,
      description:
        "The chatbot's response to the user's query, written in a friendly and humorous tone.",
    },
    carProps: {
      type: SchemaType.ARRAY,
      description: "An array of extracted car properties.",
      items: {
        type: SchemaType.OBJECT,
        properties: {
          key: { type: SchemaType.STRING, description: "The property name." },
          emoji: {
            type: SchemaType.STRING,
            description: "The property emoji.",
          },
          value: {
            type: SchemaType.STRING,
            description: "The property value.",
          },
        },
        required: ["key", "emoji", "value"],
      },
    },
    mongoQuery: {
      type: SchemaType.OBJECT,
      description:
        "A structured query for MongoDB based on the extracted car properties.",
      properties: {
        make: {
          type: SchemaType.OBJECT,
          description:
            "The manufacturer or brand of the car. " + SpecificPromptDetails,
          properties: {
            $in: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
          },
        },
        model: {
          type: SchemaType.OBJECT,
          description:
            "The specific model of the car. " + SpecificPromptDetails,
          properties: {
            $in: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
          },
        },
        year: {
          type: SchemaType.OBJECT,
          description:
            "The manufacturing year of the car. " + SpecificPromptDetails,
          properties: {
            $gte: { type: SchemaType.NUMBER },
            $lte: { type: SchemaType.NUMBER },
          },
        },
        price: {
          type: SchemaType.OBJECT,
          description: "The price range of the car. " + SpecificPromptDetails,
          properties: {
            $gte: { type: SchemaType.NUMBER },
            $lte: { type: SchemaType.NUMBER },
          },
        },
        mileage: {
          type: SchemaType.OBJECT,
          description:
            "The mileage range of the car in kilometers. " +
            SpecificPromptDetails,
          properties: {
            $gte: { type: SchemaType.NUMBER },
            $lte: { type: SchemaType.NUMBER },
          },
        },
        fuelType: {
          type: SchemaType.OBJECT,
          description:
            "The type of fuel the car uses. " + SpecificPromptDetails,
          properties: {
            $in: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
          },
        },
        transmission: {
          type: SchemaType.OBJECT,
          description: "The car's transmission type. " + SpecificPromptDetails,
          properties: {
            $in: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
          },
        },
        bodyType: {
          type: SchemaType.OBJECT,
          description: "The car's body type. " + SpecificPromptDetails,
          properties: {
            $in: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
          },
        },
        color: {
          type: SchemaType.OBJECT,
          description: "The color of the car. " + SpecificPromptDetails,
          properties: {
            $in: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
          },
        },
        features: {
          type: SchemaType.OBJECT,
          description: "The car's features (e.g., Bluetooth, Airbags).",
          properties: {
            $all: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
          },
        },
        engine: {
          type: SchemaType.OBJECT,
          description:
            "Details about the car's engine. " + SpecificPromptDetails,
          properties: {
            capacity: {
              type: SchemaType.OBJECT,
              properties: {
                $gte: { type: SchemaType.NUMBER },
                $lte: { type: SchemaType.NUMBER },
              },
            },
            horsepower: {
              type: SchemaType.OBJECT,
              properties: {
                $gte: { type: SchemaType.NUMBER },
                $lte: { type: SchemaType.NUMBER },
              },
            },
            torque: {
              type: SchemaType.OBJECT,
              properties: {
                $gte: { type: SchemaType.NUMBER },
                $lte: { type: SchemaType.NUMBER },
              },
            },
          },
        },
        dimensions: {
          type: SchemaType.OBJECT,
          description: "The car's dimensions.",
          properties: {
            length: {
              type: SchemaType.OBJECT,
              properties: {
                $gte: { type: SchemaType.NUMBER },
                $lte: { type: SchemaType.NUMBER },
              },
            },
            width: {
              type: SchemaType.OBJECT,
              properties: {
                $gte: { type: SchemaType.NUMBER },
                $lte: { type: SchemaType.NUMBER },
              },
            },
            height: {
              type: SchemaType.OBJECT,
              properties: {
                $gte: { type: SchemaType.NUMBER },
                $lte: { type: SchemaType.NUMBER },
              },
            },
          },
        },
      },
    },
  },
  required: ["chatReply"],
};
