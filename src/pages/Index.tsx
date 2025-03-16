
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import GlassPanelSection from "@/components/GlassPanelSection";
import LanguageButton from "@/components/LanguageButton";
import FeatureItem from "@/components/FeatureItem";
import WorkflowStep from "@/components/WorkflowStep";
import GithubLink from "@/components/GithubLink";
import { 
  Globe, 
  Languages, 
  MessageSquareText, 
  Database, 
  Server, 
  FileCode,
  Github
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Create gradient animation for the background
    const canvas = document.getElementById("gradient-canvas") as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        let time = 0;
        
        const resize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        
        const animate = () => {
          time += 0.003;
          
          // Clear canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Create a smooth gradient background
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          gradient.addColorStop(0, `hsla(210, 90%, 95%, ${0.8 + Math.sin(time) * 0.1})`);
          gradient.addColorStop(1, `hsla(240, 90%, 97%, ${0.8 + Math.cos(time) * 0.1})`);
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw subtle circles
          for (let i = 0; i < 5; i++) {
            const x = canvas.width * (0.2 + 0.6 * Math.sin(time * 0.5 + i));
            const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.7 + i));
            const radius = Math.min(canvas.width, canvas.height) * (0.1 + 0.05 * Math.sin(time + i));
            
            const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            circleGradient.addColorStop(0, `hsla(${210 + i * 20}, 100%, 70%, 0.07)`);
            circleGradient.addColorStop(1, `hsla(${210 + i * 20}, 100%, 70%, 0)`);
            
            ctx.fillStyle = circleGradient;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
          }
          
          requestAnimationFrame(animate);
        };
        
        window.addEventListener("resize", resize);
        resize();
        animate();
        
        return () => {
          window.removeEventListener("resize", resize);
        };
      }
    }
  }, []);

  return (
    <>
      {/* Animated gradient background */}
      <canvas 
        id="gradient-canvas" 
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Navigation */}
          <motion.nav 
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xl font-medium">NDMO-Agent</div>
            <GithubLink url="https://github.com/Fawaz0ibra/NDMO-Agent" />
          </motion.nav>
          
          {/* Hero section */}
          <Hero 
            title="Data Management & Personal Data Protection Q&A Assistant" 
            subtitle="A bilingual conversational agent providing answers about data policies and protection in both English and Arabic."
          />
          
          {/* Language selection section */}
          <GlassPanelSection 
            id="assistants"
            title="Choose Your Assistant" 
            subtitle="Access our AI assistants on Hugging Face Spaces. Each assistant is optimized for its specific language and policy document."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <LanguageButton 
                language="English" 
                href="https://huggingface.co/spaces/fawaz0ibra/NDMO-Agent-English"
                icon={<Globe size={24} />} 
              />
              <LanguageButton 
                language="Arabic" 
                href="https://huggingface.co/spaces/fawaz0ibra/NDMO-Agent-Arabic"
                icon={<Languages size={24} />} 
              />
            </div>
          </GlassPanelSection>
          
          {/* Features section */}
          <GlassPanelSection 
            id="features"
            title="Key Features" 
            subtitle="Our assistants leverage advanced NLP techniques to provide accurate answers to your policy questions."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FeatureItem 
                icon={<Languages size={24} />}
                title="Bilingual Support" 
                description="Dedicated English and Arabic applications, each optimized for their respective language."
                delay={0.1}
              />
              <FeatureItem 
                icon={<MessageSquareText size={24} />}
                title="Conversational Q&A" 
                description="Multi-turn interactions powered by LangChain's ConversationalRetrievalChain."
                delay={0.2}
              />
              <FeatureItem 
                icon={<Database size={24} />}
                title="FAISS Vector Store" 
                description="Efficient similarity search for retrieving the most relevant document passages."
                delay={0.3}
              />
              <FeatureItem 
                icon={<Server size={24} />}
                title="Optimized Embeddings" 
                description="Language-specific HuggingFace embeddings for accurate document representation."
                delay={0.4}
              />
            </div>
          </GlassPanelSection>
          
          {/* How it works section */}
          <GlassPanelSection 
            id="workflow"
            title="How It Works" 
            subtitle="Our assistants follow a sophisticated workflow to provide accurate answers to your policy questions."
            className="mb-8"
          >
            <div className="space-y-8">
              <WorkflowStep 
                number={1} 
                title="PDF Loading" 
                description="Each assistant has its own policy PDF that gets processed into a vector store."
              />
              <WorkflowStep 
                number={2} 
                title="Embeddings Generation" 
                description="Language-specific embeddings are created to represent policy documents semantically."
              />
              <WorkflowStep 
                number={3} 
                title="Chain Setup" 
                description="A ConversationalRetrievalChain is configured with memory buffer for multi-turn Q&A."
              />
              <WorkflowStep 
                number={4} 
                title="User Interaction" 
                description="Ask questions in your preferred language through an intuitive Streamlit interface."
              />
            </div>
          </GlassPanelSection>
          
          {/* Footer */}
          <footer className="py-8 text-center opacity-80">
            <p className="text-sm text-muted-foreground">
              NDMO-Agent © {new Date().getFullYear()} • 
              <a 
                href="https://github.com/Fawaz0ibra/NDMO-Agent" 
                target="_blank" 
                rel="noreferrer"
                className="ml-1 text-primary hover:underline"
              >
                View on GitHub
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;
